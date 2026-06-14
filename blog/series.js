// Theme toggle (self-contained for the series page)
(function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const apply = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('theme', theme); } catch (e) { /* ignore */ }
        toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    };

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        apply(current === 'dark' ? 'light' : 'dark');
    });
})();

function formatDate(iso) {
    if (!iso) return '';
    const parts = String(iso).split('-').map(Number);
    if (parts.length !== 3 || parts.some(Number.isNaN)) return iso;
    const [y, m, d] = parts;
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    return `${d} ${months[m - 1]} ${y}`;
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

function renderError(message) {
    document.getElementById('series').innerHTML =
        `<div class="error-message"><p>${escapeHtml(message)}</p></div>`;
}

async function loadSeries() {
    const container = document.getElementById('series');
    const params = new URLSearchParams(window.location.search);
    const key = params.get('series') || '';

    if (!/^[a-z0-9][a-z0-9-_]*$/i.test(key)) {
        renderError('No valid series specified.');
        return;
    }

    let data;
    try {
        const res = await fetch('posts.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        data = await res.json();
    } catch (e) {
        renderError('Sorry, this series could not be loaded.');
        return;
    }

    const series = (data.series || {})[key];
    const posts = (data.posts || []).filter((p) => p.series === key);

    if (!series || !posts.length) {
        renderError('Sorry, this series could not be found.');
        return;
    }

    // List in reading order (by slug, e.g. lecture 01, 02, 03...).
    posts.sort((a, b) => String(a.slug).localeCompare(String(b.slug)));

    document.title = `${series.title} · Tammy Trinh`;

    const list = posts.map((p) => {
        const slug = encodeURIComponent(p.slug);
        const date = formatDate(p.date);
        const tags = Array.isArray(p.tags) && p.tags.length
            ? `<span class="blog-tags">${p.tags.map((t) => `<span class="blog-tag">${escapeHtml(t)}</span>`).join('')}</span>`
            : '';
        return `
            <li class="blog-entry">
                <a class="blog-entry-link" href="post.html?slug=${slug}">
                    ${date ? `<span class="blog-date">${escapeHtml(date)}</span>` : ''}
                    <span class="blog-entry-title">${escapeHtml(p.title || p.slug)}</span>
                </a>
                ${p.summary ? `<p class="blog-summary">${escapeHtml(p.summary)}</p>` : ''}
                ${tags}
            </li>`;
    }).join('');

    container.innerHTML = `
        <h1 class="title">${escapeHtml(series.title)}</h1>
        ${series.summary ? `<p class="series-intro">${escapeHtml(series.summary)}</p>` : ''}
        <ul class="blog-list">${list}</ul>
    `;
}

document.addEventListener('DOMContentLoaded', loadSeries);

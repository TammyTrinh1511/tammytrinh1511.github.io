// Theme toggle (self-contained for the post page)
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

// Format an ISO date (YYYY-MM-DD) as e.g. "14 June 2026"
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
    const article = document.getElementById('post');
    article.innerHTML = `<div class="error-message"><p>${escapeHtml(message)}</p></div>`;
}

async function loadPost() {
    const article = document.getElementById('post');
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug') || '';

    // Only allow simple, file-safe slugs.
    if (!/^[a-z0-9][a-z0-9-_]*$/i.test(slug)) {
        renderError('No valid post specified.');
        return;
    }

    // Look up metadata (title, date) from the manifest; the markdown holds the body.
    let meta = null;
    let seriesMap = {};
    try {
        const res = await fetch('posts.json');
        if (res.ok) {
            const data = await res.json();
            meta = (data.posts || []).find((p) => p.slug === slug) || null;
            seriesMap = data.series && typeof data.series === 'object' ? data.series : {};
        }
    } catch (e) { /* fall back to slug-derived title */ }

    // The markdown path comes from the manifest (so posts can live in subfolders);
    // fall back to "<slug>.md" in this directory for posts without an explicit file.
    const mdPath = (meta && meta.file) || `${slug}.md`;
    let markdown;
    try {
        const res = await fetch(mdPath);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        markdown = await res.text();
    } catch (e) {
        renderError('Sorry, this post could not be found.');
        return;
    }

    const title = (meta && meta.title) || slug.replace(/[-_]/g, ' ');
    const dateStr = formatDate(meta && meta.date);
    const bodyHtml = window.marked ? window.marked.parse(markdown) : escapeHtml(markdown);

    document.title = `${title} · Tammy Trinh`;

    const seriesKey = meta && meta.series;
    const seriesInfo = seriesKey && seriesMap[seriesKey];
    const breadcrumb = seriesInfo
        ? `<p class="post-series"><a href="series.html?series=${encodeURIComponent(seriesKey)}">${escapeHtml(seriesInfo.title || seriesKey)}</a></p>`
        : '';

    article.innerHTML = `
        ${breadcrumb}
        <h1 class="title post-title">${escapeHtml(title)}</h1>
        ${dateStr ? `<p class="post-date">${escapeHtml(dateStr)}</p>` : ''}
        <div class="post-body">${bodyHtml}</div>
    `;
}

document.addEventListener('DOMContentLoaded', loadPost);

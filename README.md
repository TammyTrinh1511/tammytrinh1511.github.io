# Personal Website

Tammy Trinh's personal academic homepage. Research in AI engineering, information retrieval, and multi-agent systems.

**Live site:** [tammy-trinh.github.io](https://tammy-trinh.github.io)

## Tech Stack

- Vanilla HTML, CSS, JavaScript
- Markdown content
- [marked.js](https://marked.js.org/) (via CDN) for rendering blog posts
- GitHub Pages hosting

## Development

```bash
# Serve locally from the repo root
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Structure

- `index.html`: Main page
- `*.md`: Home-page content (`about`, `publications`, `resume`)
- `styles.css`: Styling
- `script.js`: Home-page behaviour (theme, nav, content + blog-list loading)
- `assets/`: Images and favicon
- `blog/`: Blog posts and the post viewer
  - `posts.json`: manifest listing every post and any series (title, date, slug, file, summary, tags)
  - `post.html` / `post.js`: renders a single post from `?slug=...`
  - `series.html` / `series.js`: renders a series ("folder") from `?series=...`
  - `hello-world.md`: starter template
  - `articles/`: standalone (non-series) article Markdown (e.g. `ai-labor-markets-panel.md`)
  - `cs153/`, `harness-engineering/`, `system-design/`: Markdown for each series (folder per series)
  - `assets/`: images used inside posts

## Adding a blog post

1. **Write the post.** Create the Markdown body, e.g. `blog/my-post.md` (or inside a
   series folder such as `blog/cs153/`). Write the body only and **don't repeat the
   title**; it's added automatically from the manifest. Code blocks, images, tables,
   blockquotes, and lists are all supported.
2. **Register it.** Add an entry to the `posts` array in `blog/posts.json`:

   ```json
   {
     "slug": "my-post",
     "title": "My post title",
     "date": "2026-07-01",
     "file": "my-post.md",
     "summary": "One-line description shown in the list.",
     "tags": ["research", "notes"]
   }
   ```

   - `slug` is the URL id (`post.html?slug=...`); keep it unique and URL-safe.
   - `file` is the Markdown path *relative to `blog/`* (e.g. `cs153/cs153-04-energy.md`).
     If omitted, it defaults to `<slug>.md` in `blog/`.
   - `date` is `YYYY-MM-DD`; posts are listed newest-first automatically.
   - `summary` and `tags` are optional.

3. **Group posts into a series (optional).** Define the series once under the
   top-level `series` map, then add `"series": "<key>"` to each post in it:

   ```json
   "series": {
     "cs153": { "title": "Stanford CS 153 Lecture Notes", "summary": "..." }
   }
   ```

   Posts with a `series` are collected into one **folder** card on the home page that
   opens a series page (`series.html?series=cs153`) listing them. Posts without a
   `series` appear as standalone entries.

4. **Images (optional).** Put image files in `blog/assets/` and reference them as
   `![caption](assets/my-image.png)` (paths resolve relative to `blog/`, regardless
   of which subfolder the Markdown lives in).

Standalone posts appear under **Blogs** on the home page; series posts appear inside
their folder. Use `blog/hello-world.md` as a starting template.

# Z-Push.github.io

Source of [z-push.org](https://z-push.org), built by GitHub Pages with Jekyll.

The theme is in `_layouts/`, `_includes/` and `assets/`: one stylesheet
(`assets/css/main.css`) and a small script for the mobile menu and search
(`assets/js/main.js`). Colours, widths and fonts are CSS variables at the top
of the stylesheet. Fonts are Inter and JetBrains Mono from Google Fonts.
Images used by old posts stay under `wp-content/uploads/` so their URLs do
not change.

Site settings in `_config.yml`: `title`, `description`, `logo`, `navigation`
(the menu), `sidebar_posts` (Latest News count), and optionally `footer`
(footer text) and `search.site` (the domain the search box limits results to,
which defaults to the host in `url`).

## Writing a news post

Add a file to `_posts/` named `YYYY-MM-DD-slug.md`, for example
`_posts/2026-10-25-z-push-2-7-7-released.md`:

```markdown
---
title: "Z-Push 2.7.7 released"
---

Hello,

We have just released Z-Push **2.7.7**.
```

That is all that is required. The post then appears on the News page, in the
sidebar's Latest News, on the Archives page and in the RSS feed (`/feed.xml`).

Optional front matter:

| Key | Default | Use |
|---|---|---|
| `heading` | `title` | Heading shown on the post page, when it should differ from the title used in lists |
| `author` | `zpushadmin` | Key from `_data/authors.yml` |
| `categories` | `[news]` | Category; `news` is the only one with a listing page |
| `summary` | first 25 words | Text shown under the title on listing pages |
| `permalink` | `/slug/` | Only needed to keep an older URL |

Posts can be Markdown (`.md`) or HTML (`.html`). The posts imported from the
old site are HTML.

## Pages

The menu pages are `index.html` (Home), `bugs/`, `compatibility/`,
`developers/`, `download/` and `faq/`. Each is front matter plus the page
content. The menu itself is the `navigation` list in `_config.yml`.

Pages can also be Markdown. A file such as `faq/index.md` (or `faq.md` with
`permalink: /faq/`) needs only a `title:` in its front matter; the page
layout is applied by default. Rename an existing page from `.html` to `.md`
to convert it, keeping the same folder so its URL does not change.

Listing pages are generated from the posts:

- `/category/news/` - all news posts (`category/news.html`)
- `/archives/` - all posts by year and month (`archives.html`)
- `/author/<key>/` - posts by one author (`author/<key>.html`)

Old WordPress listing URLs (`/2023/04/`, `/category/news/page/2/`,
`/author/zpushadmin/page/2/`) redirect to these through `redirect_from`.

## Testing locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://127.0.0.1:4000/. The `github-pages` gem in the `Gemfile`
pins the same Jekyll and plugin versions GitHub Pages uses.

# eehackspace.github.io

Source for the [East Essex Hackspace](https://eehack.space) website, built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

## Local development

With Docker:

```
docker run --rm -it -v "$PWD":/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve
```

Or with Ruby/Bundler installed:

```
bundle install
bundle exec jekyll serve
```

Then visit http://localhost:4000

## Structure

- `_config.yml` - site configuration
- `_layouts/default.html` - shared page wrapper (head, header, nav, footer, scripts)
- `_includes/` - header, nav and footer partials
- `_data/nav.yml`, `_data/footer_links.yml`, `_data/social.yml`, `_data/facilities.yml` - editable lists used by the layout/pages, so links and facility cards can be updated without touching HTML
- `index.html`, `find-us.html` - page content
- `assets/`, `images/` - static assets (CSS, JS, fonts, images), copied through unchanged

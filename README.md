# Md. Rabbi — Portfolio

Personal portfolio of Md. Rabbi, Full-Stack PHP Developer (Laravel, CodeIgniter, SQL Server), focused on enterprise and banking software.

It is a static, single-page site: no build step and no backend.

## Tech stack

- HTML5
- Tailwind CSS (CDN build, layout utilities only)
- Custom design system in `assets/css/app.css` (CSS variables, light and dark themes)
- JavaScript (ES6) with jQuery 3.7
- Font Awesome 6 icons
- Google Fonts: Plus Jakarta Sans, Inter, JetBrains Mono

## Running locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python -m http.server 5173
```

Then visit http://localhost:5173.

## Project structure

```text
portfolio/
├── index.html                  Page shell: section headings, prose, form, modal
├── README.md
└── assets/
    ├── css/
    │   └── app.css             Design tokens and all component styles
    ├── documents/
    │   └── resume.pdf          (to be added — see "Before publishing")
    └── js/
        ├── theme.js            Light/dark theme, loaded in <head> to avoid a flash
        ├── tailwind.config.js  Tailwind CDN configuration
        ├── data/
        │   ├── site.js         Profile, socials, skills, experience, services, ...
        │   └── projects.js     Project case studies and filter categories
        ├── utils.js            Shared helpers (escaping, scroll listener, ...)
        ├── templates.js        Reusable UI components (data in, HTML out)
        ├── render.js           Fills [data-render] placeholders from the data
        ├── animations.js       Scroll reveal, counters, typing effect, progress bar
        ├── navigation.js       Navbar, mobile menu, active section, back to top
        ├── projects.js         Project grid and category filtering
        ├── modal.js            Project detail dialog
        ├── contact.js          Contact form validation and delivery
        └── app.js              Entry point: starts the modules in order
```

## Editing content

Almost all content is data. You should rarely need to touch the HTML.

| To change | Edit |
| --- | --- |
| Name, role, avatar, social links, contact email | `assets/js/data/site.js` → `profile`, `contact`, `socials` |
| Statistics, strengths, skills | `assets/js/data/site.js` → `stats`, `strengths`, `skills` |
| Work experience, education, certifications | `assets/js/data/site.js` → `experience`, `education`, `certifications` |
| Banking expertise, problems, services, process | `assets/js/data/site.js` → `expertise`, `problems`, `services`, `process` |
| Architecture diagram and principles | `assets/js/data/site.js` → `architecture` |
| Projects and filter categories | `assets/js/data/projects.js` |
| Hero heading, About text, section headings | `index.html` |

Notes:

- **Core skills:** in each `skills` group, names listed in `core` are highlighted as the core stack.
- **Project filters:** a project appears under every entry in its `categories` array; the first entry is its primary category.
- **Project buttons:** GitHub and Live Demo buttons only appear when `githubUrl` / `demoUrl` are real URLs (not `#`).
- **Project screenshots:** set `image` to a file path to replace the generated cover.
- **Profile photo:** set `profile.avatar` to an image path to replace the initials.
- **Icons:** `icon` values are Font Awesome class names, e.g. `fa-solid fa-database`.
- **Colours:** `tint` accepts `accent`, `blue`, `cyan`, `green`, `violet`, `rose`, `orange` or `amber`.

## Theming

All colours, fonts, radii, shadows and spacing are CSS variables at the top of `assets/css/app.css`. The `:root` block defines the light theme and `.dark` overrides it. Change a token there and it applies everywhere.

The visitor's theme choice is saved in `localStorage` under `theme`. Until they choose, the site follows the system setting.

## Contact form

The form validates in the browser. Delivery depends on `contact.endpoint` in `assets/js/data/site.js`:

- **Empty (default):** opens the visitor's email app with the message pre-filled.
- **Set to a URL:** POSTs `name`, `email`, `subject` and `message` to that URL via AJAX.

If you add a backend, it should handle server-side validation, CSRF protection, rate limiting and input sanitisation.

## Before publishing

- Add the resume at `assets/documents/resume.pdf`. The download buttons link to it and it does not exist yet.
- Replace the bracketed placeholders (`[COMPANY NAME]`, `[DATE]`, `[DEGREE / PROGRAM]`, ...) in `assets/js/data/site.js`.
- Add real project links and, where they can be shown, screenshots in `assets/js/data/projects.js`.
- Replace the placeholder domain `https://yourportfolio.dev/` in the canonical and Open Graph tags in `index.html`.
- Tailwind is loaded from its CDN, which is intended for development. For production, compile Tailwind to a static stylesheet.

## Accessibility and browser support

- Semantic landmarks, skip link, visible focus states and keyboard-operable menu, filters and modal.
- Animations are disabled when the visitor prefers reduced motion.
- Targets current versions of Chrome, Edge, Firefox and Safari.

## Confidentiality

Project and experience descriptions are anonymised summaries. Do not add customer data, account numbers, internal URLs, credentials, proprietary source code or confidential screenshots.

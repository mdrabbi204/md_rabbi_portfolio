# Md. Rabbi — Portfolio

Personal portfolio of Md. Rabbi, Full-Stack PHP Developer (Laravel, CodeIgniter, SQL Server), focused on enterprise and banking software.

It is a static, single-page site: no build step and no backend.

## What the site shows

- **Experience:** Associate Programmer (Jan 2026 – Present) and Assistant Programmer (Jun 2023 – Dec 2025) at MicroMac Techno Valley Ltd.
- **Education:** BSc in Computer Engineering, Bangladesh University of Business & Technology (BUBT).
- **Certifications and publications:** one certification and one IEEE publication, shown as cards under Education.
- **Projects:** nine products and modules worked on — FX Return, Credit Return, CSMS, goAML Middleware, A1Queue, Write-off Management Tool, PSED, FDI and Akhter's MRCPCH — filterable by Banking, Enterprise, Dashboard, Reporting, Automation and E-Learning.

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
    │   ├── resume.pdf          ATS-friendly resume served by the download buttons
    │   └── resume.html         Editable source of the resume (print to PDF to regenerate)
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
| Work experience, education, certifications, publications | `assets/js/data/site.js` → `experience`, `education`, `certifications`, `publications` |
| Banking expertise, problems, services, process | `assets/js/data/site.js` → `expertise`, `problems`, `services`, `process` |
| Architecture diagram and principles | `assets/js/data/site.js` → `architecture` |
| Projects and filter categories | `assets/js/data/projects.js` |
| Hero heading, About text, section headings | `index.html` |

Notes:

- **Core skills:** in each `skills` group, names listed in `core` are highlighted as the core stack.
- **Project filters:** a project appears under every entry in its `categories` array; the first entry is its primary category.
- **Project buttons:** GitHub and Live Demo buttons only appear when `githubUrl` / `demoUrl` are real URLs (not `#`). All current projects leave both as `#`, so no buttons show.
- **Project detail sections:** a section is skipped when its field is empty. `techStack` and `challenges` are currently empty for every project, so those sections do not appear.
- **Certification and publication cards:** both use the same card. The link only appears when `url` is a real URL; `linkLabel` sets its text (default "View credential"), and `icon` / `tint` override the default award icon.
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

- Keep `assets/documents/resume.pdf` in step with the site content. To update it, edit `assets/documents/resume.html`, open it in Chrome or Edge, and print to PDF (A4, no headers and footers).
- Add the credential link for the certification (`certifications[].url` in `assets/js/data/site.js`).
- Fill in `techStack` for each project and, where they can be shown, add screenshots in `assets/js/data/projects.js`.
- Check that the "Years Development Experience" figure in `stats` matches the experience timeline.
- Replace the placeholder domain `https://yourportfolio.dev/` in the canonical and Open Graph tags in `index.html`.
- Tailwind is loaded from its CDN, which is intended for development. For production, compile Tailwind to a static stylesheet.

## Accessibility and browser support

- Semantic landmarks, skip link, visible focus states and keyboard-operable menu, filters and modal.
- Animations are disabled when the visitor prefers reduced motion.
- Targets current versions of Chrome, Edge, Firefox and Safari.

## Confidentiality

Project descriptions are based on publicly available product information and do not name clients. Do not add customer data, account numbers, internal URLs, credentials, proprietary source code or confidential screenshots.

/**
 * templates.js — Reusable UI components as pure functions (data in, HTML out).
 * No DOM access and no state: render.js and projects.js decide where they go.
 */
window.Portfolio = window.Portfolio || {};

(function (P) {
  'use strict';

  const esc = P.utils.escapeHTML;
  const isRealUrl = P.utils.isRealUrl;

  /* ---- Primitives ---- */

  function icon(classes) {
    return `<i class="${esc(classes)}" aria-hidden="true"></i>`;
  }

  function tintClass(name) {
    return 'tint-' + esc(name || 'accent');
  }

  function iconChip(item, small) {
    return `<span class="icon-chip ${small ? 'icon-chip--sm ' : ''}${tintClass(item.tint)}">${icon(item.icon)}</span>`;
  }

  function tagList(tags) {
    if (!tags || !tags.length) return '';
    return `<ul class="tag-list">${tags.map(function (tag) { return `<li class="tag">${esc(tag)}</li>`; }).join('')}</ul>`;
  }

  function checkList(points) {
    if (!points || !points.length) return '';
    const items = points.map(function (point) {
      return `<li>${icon('fa-solid fa-check')}<span>${esc(point)}</span></li>`;
    }).join('');
    return `<ul class="check-list">${items}</ul>`;
  }

  /** Attributes for a link: external URLs open in a new tab. */
  function linkAttrs(url) {
    const external = /^https?:/i.test(url);
    return `href="${esc(url)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}`;
  }

  /* ---- Hero ---- */

  function avatar(profile) {
    return profile.avatar
      ? `<img src="${esc(profile.avatar)}" alt="Portrait of ${esc(profile.name)}" width="144" height="144" />`
      : `<span aria-hidden="true">${esc(profile.initials)}</span>`;
  }

  function codeCard(profile) {
    const row = function (key, value) {
      return `  <span class="tok-key">'${esc(key)}'</span> <span class="tok-muted">=&gt;</span> <span class="tok-string">'${esc(value)}'</span>,`;
    };
    const lines = [
      '<span class="tok-var">$developer</span> <span class="tok-muted">=</span> [',
      row('name', profile.name),
      row('role', profile.role),
      row('focus', profile.focus),
      row('status', profile.status),
      '];',
    ];
    return `<div class="code-card__bar"><span class="window-dot"></span><span class="window-dot"></span><span class="window-dot"></span><span class="code-card__file">developer.php</span></div>` +
      `<pre><code>${lines.join('\n')}</code></pre>`;
  }

  function stackTile(item) {
    return `<li class="stack-tile ${tintClass(item.tint)}">${icon(item.icon)}<span>${esc(item.label)}</span></li>`;
  }

  /* ---- Social / contact ---- */

  function socialIcon(social) {
    return `<li><a class="icon-btn" ${linkAttrs(social.url)} aria-label="${esc(social.ariaLabel)}">${icon(social.icon)}</a></li>`;
  }

  function contactItem(social) {
    return `<li><a class="card card--compact card--hover contact-item reveal" ${linkAttrs(social.url)}>` +
      iconChip({ icon: social.icon }, true) +
      `<span class="contact-item__body"><span class="contact-item__label">${esc(social.label)}</span><br />` +
      `<span class="contact-item__value">${esc(social.handle)}</span></span>` +
      `<i class="fa-solid fa-arrow-up-right-from-square contact-item__arrow" aria-hidden="true"></i></a></li>`;
  }

  /* ---- Cards ---- */

  function stat(item) {
    return `<div class="stat"><p class="stat__value"><span class="counter" data-target="${esc(item.value)}">${esc(item.value)}</span>` +
      `<span class="stat__suffix">${esc(item.suffix || '')}</span></p><p class="stat__label">${esc(item.label)}</p></div>`;
  }

  /**
   * Icon + title + text card. Used for strengths, expertise, problems and services.
   * options: { heading: 'h3' | 'h4', compact: boolean, row: boolean }
   */
  function featureCard(item, options) {
    const opts = options || {};
    const heading = opts.heading || 'h3';
    const classes = ['card', 'card--hover', 'feature-card', 'reveal'];
    if (opts.compact) classes.push('card--compact');
    if (opts.row) classes.push('card--row');
    const copy = `<${heading} class="card__title">${esc(item.title)}</${heading}><p class="card__text">${esc(item.text)}</p>`;
    return `<li class="${classes.join(' ')}">${iconChip(item, opts.compact)}${opts.row ? `<div>${copy}</div>` : copy}</li>`;
  }

  function skillCard(group) {
    const badges = group.items.map(function (skill) {
      const core = group.core.indexOf(skill) !== -1;
      return `<li class="badge${core ? ' badge--core' : ''}">${esc(skill)}${core ? '<span class="visually-hidden"> (core stack)</span>' : ''}</li>`;
    }).join('');
    return `<li class="card card--hover skill-card reveal ${tintClass(group.tint)}">` +
      `<div class="skill-card__head">${iconChip(group)}<h3 class="card__title">${esc(group.title)}</h3>` +
      `<span class="skill-card__count">${group.items.length} skills</span></div>` +
      `<ul class="badge-list">${badges}</ul></li>`;
  }

  /** Timeline entry — shared by work experience and education. */
  function timelineItem(item) {
    const org = [item.org, item.meta].filter(Boolean).map(esc).join(' · ');
    return `<li class="timeline__item reveal"><article class="card timeline__card">` +
      `<div class="timeline__head"><div><h3 class="timeline__title">${esc(item.title)}</h3>` +
      `<p class="timeline__org">${org}</p></div><span class="timeline__period">${esc(item.period)}</span></div>` +
      checkList(item.points) + tagList(item.tags) + `</article></li>`;
  }

  function certCard(cert) {
    const link = isRealUrl(cert.url)
      ? `<a class="cert-card__link" ${linkAttrs(cert.url)}>View credential ${icon('fa-solid fa-arrow-up-right-from-square')}</a>`
      : '';
    return `<li class="card card--hover card--row cert-card reveal">${iconChip({ icon: 'fa-solid fa-award', tint: 'amber' })}` +
      `<div><h3 class="card__title">${esc(cert.title)}</h3><p class="card__text">${esc(cert.issuer)}</p>` +
      `<p class="card__text">${esc(cert.date)}</p>${link}</div></li>`;
  }

  function processStep(step, index) {
    const number = String(index + 1).padStart(2, '0');
    return `<li class="card card--hover step reveal" data-step="${number}"><span class="step__label">Step ${number}</span>` +
      `<h3 class="card__title">${esc(step.title)}</h3><p class="card__text">${esc(step.text)}</p></li>`;
  }

  /* ---- Architecture ---- */

  function archLayer(layer) {
    const connector = layer.link
      ? `<div class="arch__link">${icon('fa-solid fa-arrow-down')}<span>${esc(layer.link)}</span></div>`
      : '';
    return `<div class="arch__layer ${tintClass(layer.tint)}">${iconChip(layer)}<div>` +
      `<p class="arch__title">${esc(layer.title)}</p><p class="arch__text">${esc(layer.text)}</p></div></div>${connector}`;
  }

  /* ---- Projects ---- */

  function filterChip(filter, active) {
    return `<button type="button" class="filter-chip${active ? ' is-active' : ''}" data-filter="${esc(filter.id)}" aria-pressed="${active}">` +
      `${esc(filter.label)}<span class="filter-chip__count">${filter.count}</span></button>`;
  }

  function projectCover(project, category) {
    if (project.image) {
      return `<img class="project-card__image" src="${esc(project.image)}" alt="Screenshot of ${esc(project.title)}" loading="lazy" decoding="async" />`;
    }
    return `<div class="cover-window" aria-hidden="true">` +
      `<div class="cover-window__bar"><span class="window-dot"></span><span class="window-dot"></span><span class="window-dot"></span>` +
      `<span class="cover-window__name">${esc(P.utils.slugify(project.title))}</span></div>` +
      `<div class="cover-window__body">${iconChip({ icon: project.icon, tint: category.tint })}` +
      `<div class="cover-lines"><span></span><span></span><span></span></div></div></div>`;
  }

  function projectLinks(project) {
    const links = [];
    if (isRealUrl(project.githubUrl)) {
      links.push(`<a class="icon-btn" ${linkAttrs(project.githubUrl)} aria-label="${esc(project.title)} on GitHub">${icon('fa-brands fa-github')}</a>`);
    }
    if (isRealUrl(project.demoUrl)) {
      links.push(`<a class="icon-btn" ${linkAttrs(project.demoUrl)} aria-label="Live demo of ${esc(project.title)}">${icon('fa-solid fa-arrow-up-right-from-square')}</a>`);
    }
    return links.length ? `<div class="project-card__links">${links.join('')}</div>` : '';
  }

  function projectCard(project, category) {
    return `<li class="card card--hover project-card reveal">` +
      `<div class="project-card__cover ${tintClass(category.tint)}">${projectCover(project, category)}` +
      `<span class="badge badge--tint project-card__category">${esc(category.label)}</span></div>` +
      `<div class="project-card__body"><h3 class="card__title">${esc(project.title)}</h3>` +
      `<p class="card__text">${esc(project.description)}</p>${tagList(project.tags)}` +
      `<div class="project-card__footer"><button type="button" class="btn btn--primary btn--sm" data-project="${esc(project.id)}" ` +
      `aria-label="View details for ${esc(project.title)}">View Details ${icon('fa-solid fa-arrow-right')}</button>` +
      `${projectLinks(project)}</div></div></li>`;
  }

  function emptyProjects() {
    return `<li class="empty-state">${icon('fa-solid fa-folder-open')}<p>No projects found in this category.</p></li>`;
  }

  /** Body of the project detail modal. Sections without content are skipped. */
  function projectDetail(project) {
    const section = function (iconName, title, content) {
      return content ? `<section><h3 class="modal__heading">${icon('fa-solid ' + iconName)}${title}</h3>${content}</section>` : '';
    };
    const paragraph = function (text) { return text ? `<p>${esc(text)}</p>` : ''; };

    return section('fa-circle-info', 'Overview', paragraph(project.overview)) +
      section('fa-triangle-exclamation', 'Business Problem', paragraph(project.problem)) +
      section('fa-lightbulb', 'Solution', paragraph(project.solution)) +
      section('fa-list-check', 'Key Features', checkList(project.features)) +
      section('fa-microchip', 'Technology Stack', tagList(project.techStack)) +
      section('fa-code', 'Technical Challenges', paragraph(project.challenges));
  }

  P.templates = {
    avatar: avatar,
    codeCard: codeCard,
    stackTile: stackTile,
    socialIcon: socialIcon,
    contactItem: contactItem,
    stat: stat,
    featureCard: featureCard,
    skillCard: skillCard,
    timelineItem: timelineItem,
    certCard: certCard,
    processStep: processStep,
    archLayer: archLayer,
    filterChip: filterChip,
    projectCard: projectCard,
    emptyProjects: emptyProjects,
    projectDetail: projectDetail,
  };
})(window.Portfolio);

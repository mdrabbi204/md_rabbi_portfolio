/**
 * projects.js — Project grid rendering and category filtering.
 * Project content lives in data/projects.js; card markup in templates.js.
 */
window.Portfolio = window.Portfolio || {};

(function (P, $) {
  'use strict';

  const ALL = 'all';
  const SWITCH_DELAY = 180; // ms — matches the .project-grid fade in app.css
  const FALLBACK_CATEGORY = { id: '', label: 'Project', tint: 'accent' };

  let $grid, $filters, $status;
  let activeFilter = ALL;

  function categoryById(id) {
    return P.data.projectCategories.find(function (category) { return category.id === id; }) || FALLBACK_CATEGORY;
  }

  /** A project's primary category is the first one listed. */
  function primaryCategory(project) {
    return categoryById(project.categories[0]);
  }

  function findById(id) {
    return P.data.projects.find(function (project) { return project.id === id; }) || null;
  }

  function projectsFor(filter) {
    if (filter === ALL) return P.data.projects;
    return P.data.projects.filter(function (project) { return project.categories.indexOf(filter) !== -1; });
  }

  function renderFilters() {
    const filters = [{ id: ALL, label: 'All' }].concat(P.data.projectCategories).map(function (category) {
      return { id: category.id, label: category.label, count: projectsFor(category.id).length };
    });
    $filters.html(filters.map(function (filter) {
      return P.templates.filterChip(filter, filter.id === activeFilter);
    }).join(''));
  }

  function renderGrid() {
    const projects = projectsFor(activeFilter);
    const label = activeFilter === ALL ? '' : categoryById(activeFilter).label + ' ';

    $grid.html(projects.length
      ? projects.map(function (project) { return P.templates.projectCard(project, primaryCategory(project)); }).join('')
      : P.templates.emptyProjects());
    $status.text('Showing ' + projects.length + ' ' + label + (projects.length === 1 ? 'project' : 'projects'));

    P.animations.observe($grid[0]);
  }

  function setFilter(filter) {
    if (filter === activeFilter) return;
    activeFilter = filter;

    $filters.find('.filter-chip').each(function () {
      const active = this.dataset.filter === filter;
      this.classList.toggle('is-active', active);
      this.setAttribute('aria-pressed', String(active));
    });

    // Fade the grid out, swap the cards, fade back in.
    $grid.addClass('is-switching');
    window.setTimeout(function () {
      renderGrid();
      $grid.removeClass('is-switching');
    }, P.utils.reducedMotion.matches ? 0 : SWITCH_DELAY);
  }

  function init() {
    $grid = $('#projectsGrid');
    $filters = $('#projectFilters');
    $status = $('#projectsStatus');

    renderFilters();
    renderGrid();
    $filters.on('click', '.filter-chip', function () { setFilter(this.dataset.filter); });
  }

  P.projects = { init: init, findById: findById, primaryCategory: primaryCategory };
})(window.Portfolio, jQuery);

/**
 * modal.js — Accessible project detail dialog: focus trap, Escape and
 * backdrop to close, background scroll lock, focus restored on close.
 */
window.Portfolio = window.Portfolio || {};

(function (P, $) {
  'use strict';

  const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  let $modal, $footer;
  let lastFocused = null;

  function isOpen() {
    return !$modal.prop('hidden');
  }

  /** Show a link button only when the project has a real URL for it. */
  function setLink($link, url) {
    const available = P.utils.isRealUrl(url);
    $link.prop('hidden', !available).attr('href', available ? url : 'javascript:void(0)');
    return available;
  }

  function open(projectId) {
    const project = P.projects.findById(projectId);
    if (!project) return;

    const category = P.projects.primaryCategory(project);
    lastFocused = document.activeElement;

    $('#modalCategory').text(category.label).attr('class', 'badge badge--tint tint-' + category.tint);
    $('#modalTitle').text(project.title);
    $('#modalBody').html(P.templates.projectDetail(project)).scrollTop(0);

    const hasGithub = setLink($('#modalGithubLink'), project.githubUrl);
    const hasDemo = setLink($('#modalDemoLink'), project.demoUrl);
    $footer.prop('hidden', !hasGithub && !hasDemo);

    $modal.prop('hidden', false);
    $('body').addClass('is-locked');
    $('#closeModalBtn').trigger('focus');
  }

  function close() {
    if (!isOpen()) return;
    $modal.prop('hidden', true);
    $('body').removeClass('is-locked');

    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
    lastFocused = null;
  }

  /** Keep Tab / Shift+Tab cycling inside the dialog. */
  function trapFocus(event) {
    const focusable = $modal.find(FOCUSABLE).filter(':visible');
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function init() {
    $modal = $('#projectModal');
    $footer = $('#modalFooter');

    $('#closeModalBtn').on('click', close);

    // Clicking the dimmed backdrop (not the dialog itself) closes the modal.
    $modal.on('click', function (event) {
      if (event.target === $modal[0]) close();
    });

    // Project cards are rendered dynamically, so the trigger is delegated.
    $(document).on('click', '[data-project]', function () {
      open(this.dataset.project);
    });

    $(document).on('keydown', function (event) {
      if (!isOpen()) return;
      if (event.key === 'Escape') close();
      if (event.key === 'Tab') trapFocus(event);
    });
  }

  P.modal = { init: init };
})(window.Portfolio, jQuery);

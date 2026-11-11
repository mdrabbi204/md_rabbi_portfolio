/**
 * modal.js — Project detail modal handling
 */
(function ($) {
  'use strict';

  var $modal = null;
  var $overlay = null;
  var lastFocusedElement = null;

  function openModal(projectId) {
    var projects = window.portfolioProjects || [];
    var escapeHTML = window.portfolioEscapeHTML || function (s) { return s; };

    var project = null;
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].id === projectId) {
        project = projects[i];
        break;
      }
    }
    if (!project) return;

    lastFocusedElement = document.activeElement;

    // Populate modal fields
    $('#modalCategory').text(project.categoryLabel);
    $('#modalTitle').text(project.title);
    $('#modalOverview').text(project.overview);
    $('#modalProblem').text(project.problem);
    $('#modalSolution').text(project.solution);
    $('#modalChallenges').text(project.challenges);

    // Features list
    var featuresHTML = (project.features || []).map(function (f) {
      return '<li class="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">' +
             '<i class="fa-solid fa-check text-primary-500 mt-0.5 text-xs flex-shrink-0"></i>' +
             '<span>' + escapeHTML(f) + '</span>' +
             '</li>';
    }).join('');
    $('#modalFeatures').html(featuresHTML);

    // Tech stack badges
    var techHTML = (project.techStack || []).map(function (t) {
      return '<span class="tech-tag">' + escapeHTML(t) + '</span>';
    }).join('');
    $('#modalTechStack').html(techHTML);

    // Links
    var $githubLink = $('#modalGithubLink');
    var $demoLink = $('#modalDemoLink');

    if (project.githubUrl && project.githubUrl !== '#') {
      $githubLink.attr('href', project.githubUrl).show();
    } else {
      $githubLink.hide();
    }

    if (project.demoUrl && project.demoUrl !== '#') {
      $demoLink.attr('href', project.demoUrl).show();
    } else {
      $demoLink.hide();
    }

    // Show modal
    $modal.removeClass('hidden');
    $('body').css('overflow', 'hidden');

    // Focus management
    setTimeout(function () {
      $('#closeModalBtn').focus();
    }, 100);

    // Trap focus inside modal
    trapFocus($modal[0]);
  }

  function closeModal() {
    $modal.addClass('hidden');
    $('body').css('overflow', '');

    // Restore focus
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  }

  // ---- Focus trap ----
  function trapFocus(modalEl) {
    var focusable = modalEl.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    var firstEl = focusable[0];
    var lastEl = focusable[focusable.length - 1];

    modalEl.addEventListener('keydown', function handleKey(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
      if (e.key === 'Escape') {
        closeModal();
        modalEl.removeEventListener('keydown', handleKey);
      }
    });
  }

  // ---- Init ----
  $(document).ready(function () {
    $modal   = $('#projectModal');
    $overlay = $modal;

    // Close button
    $('#closeModalBtn').on('click', closeModal);

    // Backdrop click
    $modal.on('click', function (e) {
      if ($(e.target).is($modal)) {
        closeModal();
      }
    });

    // View Details buttons (delegated — cards are rendered dynamically)
    $(document).on('click', '.view-details-btn', function () {
      var projectId = $(this).data('id');
      openModal(projectId);
    });

    // Escape key (global)
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape' && !$modal.hasClass('hidden')) {
        closeModal();
      }
    });
  });
})(jQuery);

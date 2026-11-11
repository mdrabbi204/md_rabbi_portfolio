/**
 * contact.js — Contact form client-side validation and submission handling
 */
(function ($) {
  'use strict';

  // ---- Show toast notification ----
  function showToast(message, type) {
    var $toast = $('#toast');
    var $icon  = $('#toastIcon');
    var $msg   = $('#toastMsg');

    $icon.attr('class', 'fa-solid flex-shrink-0 ' +
      (type === 'error' ? 'fa-circle-exclamation text-red-400' : 'fa-circle-check text-emerald-400')
    );
    $msg.text(message);
    $toast.addClass('show');

    setTimeout(function () {
      $toast.removeClass('show');
    }, 4000);
  }

  // ---- Validate field ----
  function validateField(input, errorId, condition, message) {
    var $input = $(input);
    var $error = $('#' + errorId);

    if (condition) {
      $input.addClass('error').removeClass('valid');
      $error.text(message).removeClass('hidden');
      return false;
    } else {
      $input.removeClass('error').addClass('valid');
      $error.addClass('hidden');
      return true;
    }
  }

  // ---- Validate email format ----
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  // ---- Validate all fields ----
  function validateForm() {
    var name    = $('#contactName').val().trim();
    var email   = $('#contactEmail').val().trim();
    var subject = $('#contactSubject').val().trim();
    var message = $('#contactMessage').val().trim();

    var v1 = validateField('#contactName',    'nameError',    name.length < 2,      'Please enter your full name (at least 2 characters).');
    var v2 = validateField('#contactEmail',   'emailError',   !isValidEmail(email), 'Please enter a valid email address.');
    var v3 = validateField('#contactSubject', 'subjectError', subject.length < 3,   'Please enter a subject (at least 3 characters).');
    var v4 = validateField('#contactMessage', 'messageError', message.length < 10,  'Please enter a message (at least 10 characters).');

    return v1 && v2 && v3 && v4;
  }

  // ---- Real-time validation on blur ----
  function initRealtimeValidation() {
    $('#contactName').on('blur', function () {
      validateField(this, 'nameError', $(this).val().trim().length < 2, 'Please enter your full name.');
    });
    $('#contactEmail').on('blur', function () {
      validateField(this, 'emailError', !isValidEmail($(this).val().trim()), 'Please enter a valid email address.');
    });
    $('#contactSubject').on('blur', function () {
      validateField(this, 'subjectError', $(this).val().trim().length < 3, 'Please enter a subject.');
    });
    $('#contactMessage').on('blur', function () {
      validateField(this, 'messageError', $(this).val().trim().length < 10, 'Please enter your message.');
    });
  }

  // ---- Handle form submission ----
  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      // Focus first error field
      var $firstError = $('#contactForm .error').first();
      if ($firstError.length) $firstError.focus();
      return;
    }

    var $btn = $('#submitContactBtn');
    $btn.prop('disabled', true).html('<i class="fa-solid fa-spinner fa-spin mr-2"></i>Sending...');

    // Simulate AJAX send (replace with real endpoint when backend is ready)
    // $.ajax({
    //   url: '/contact/send',
    //   method: 'POST',
    //   data: {
    //     name:    $('#contactName').val().trim(),
    //     email:   $('#contactEmail').val().trim(),
    //     subject: $('#contactSubject').val().trim(),
    //     message: $('#contactMessage').val().trim(),
    //   },
    //   success: function (response) { ... },
    //   error:   function () { ... }
    // });

    setTimeout(function () {
      $btn.prop('disabled', false).html('<i class="fa-solid fa-paper-plane mr-2"></i>Send Message');
      $('#contactForm')[0].reset();
      $('#contactForm .form-input').removeClass('error valid');

      $('#formSuccessMsg').removeClass('hidden');
      showToast('Message sent! I\'ll be in touch soon.', 'success');

      setTimeout(function () {
        $('#formSuccessMsg').addClass('hidden');
      }, 6000);
    }, 1200);
  }

  // ---- Init ----
  $(document).ready(function () {
    initRealtimeValidation();
    $('#contactForm').on('submit', handleSubmit);
  });
})(jQuery);

/**
 * contact.js — Contact form validation and delivery.
 *
 * Delivery: if data.contact.endpoint is set, the form is POSTed there via
 * AJAX. Otherwise it opens the visitor's email app with the message
 * pre-filled, so the form works without a backend.
 */
window.Portfolio = window.Portfolio || {};

(function (P, $) {
  'use strict';

  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const TOAST_DURATION = 4500;

  // One entry per field: where it is, when it is valid, what to say if not.
  const FIELDS = [
    { input: '#contactName',    error: '#nameError',    isValid: function (v) { return v.length >= 2; },         message: 'Please enter your full name (at least 2 characters).' },
    { input: '#contactEmail',   error: '#emailError',   isValid: function (v) { return EMAIL_PATTERN.test(v); }, message: 'Please enter a valid email address.' },
    { input: '#contactSubject', error: '#subjectError', isValid: function (v) { return v.length >= 3; },         message: 'Please enter a subject (at least 3 characters).' },
    { input: '#contactMessage', error: '#messageError', isValid: function (v) { return v.length >= 10; },        message: 'Please enter a message (at least 10 characters).' },
  ];

  let toastTimer = null;

  function showToast(message, type) {
    const isError = type === 'error';
    $('#toastIcon')
      .toggleClass('fa-circle-check', !isError)
      .toggleClass('fa-circle-exclamation', isError);
    $('#toastMsg').text(message);
    $('#toast').toggleClass('toast--error', isError).addClass('is-visible');

    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { $('#toast').removeClass('is-visible'); }, TOAST_DURATION);
  }

  function showStatus(message, type) {
    $('#formStatus')
      .text(message)
      .toggleClass('form-status--error', type === 'error')
      .prop('hidden', false);
  }

  function valueOf(field) {
    return $(field.input).val().trim();
  }

  function validateField(field) {
    const valid = field.isValid(valueOf(field));
    $(field.input).attr('aria-invalid', String(!valid));
    $(field.error).text(valid ? '' : field.message).prop('hidden', valid);
    return valid;
  }

  function validateForm() {
    // Validate every field (no short-circuit) so all errors show at once.
    return FIELDS.map(validateField).every(Boolean);
  }

  function formValues() {
    return {
      name: valueOf(FIELDS[0]),
      email: valueOf(FIELDS[1]),
      subject: valueOf(FIELDS[2]),
      message: valueOf(FIELDS[3]),
    };
  }

  function resetForm() {
    $('#contactForm')[0].reset();
    FIELDS.forEach(function (field) {
      $(field.input).removeAttr('aria-invalid');
      $(field.error).prop('hidden', true);
    });
  }

  function setSending(sending) {
    const $button = $('#submitContactBtn');
    $button.prop('disabled', sending);
    $button.find('i').attr('class', sending ? 'fa-solid fa-spinner fa-spin' : 'fa-solid fa-paper-plane');
    $button.find('span').text(sending ? 'Sending...' : 'Send Message');
  }

  function sendToEndpoint(values) {
    setSending(true);
    $.ajax({ url: P.data.contact.endpoint, method: 'POST', data: values })
      .done(function () {
        resetForm();
        showStatus('Thank you! Your message has been received. I\'ll be in touch shortly.');
        showToast('Message sent! I\'ll be in touch soon.');
      })
      .fail(function () {
        showStatus('Your message could not be sent. Please email me directly at ' + P.data.contact.email + '.', 'error');
        showToast('Message could not be sent.', 'error');
      })
      .always(function () { setSending(false); });
  }

  function sendViaEmailApp(values) {
    const body = 'Name: ' + values.name + '\nEmail: ' + values.email + '\n\n' + values.message;
    window.location.href = 'mailto:' + P.data.contact.email +
      '?subject=' + encodeURIComponent(values.subject) +
      '&body=' + encodeURIComponent(body);

    showStatus('Your email app should now open with the message ready to send. If it doesn\'t, email me directly at ' + P.data.contact.email + '.');
    showToast('Opening your email app...');
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      $('#contactForm [aria-invalid="true"]').first().trigger('focus');
      return;
    }

    if (P.data.contact.endpoint) sendToEndpoint(formValues());
    else sendViaEmailApp(formValues());
  }

  function init() {
    FIELDS.forEach(function (field) {
      // Validate when leaving a field; re-check while typing once it is flagged.
      $(field.input)
        .on('blur', function () { validateField(field); })
        .on('input', function () {
          if (this.getAttribute('aria-invalid') === 'true') validateField(field);
        });
    });
    $('#contactForm').on('submit', handleSubmit);
  }

  P.contact = { init: init };
})(window.Portfolio, jQuery);

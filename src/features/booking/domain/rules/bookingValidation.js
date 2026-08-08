const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_PATTERN = /^[+\d][\d\s-]{8,}$/;

export function validateBookingForm(form) {
  const errors = {};
  if (!form.fullName.trim()) errors.fullName = "Please tell us your name.";
  if (!form.email.trim()) {
    errors.email = "We need an email to reply to.";
  } else if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = "That email doesn't look right.";
  }
  if (!form.phone.trim()) {
    errors.phone = "A phone number helps us reach you quickly.";
  } else if (!PHONE_PATTERN.test(form.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!form.service) errors.service = "Please choose a service.";
  if (!form.message.trim()) errors.message = "Tell us a little about your plans.";
  return errors;
}

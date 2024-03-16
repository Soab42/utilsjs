export function validateEmail(email) {
  // Regular expression for basic email validation
  var pattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  // Test the email against the pattern
  return pattern.test(email);
}

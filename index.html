// Uppercase transformation on name input
const nameInput = document.getElementById('name');
nameInput.addEventListener('input', () => {
  nameInput.value = nameInput.value.toUpperCase();
});

// Form validation with inline error messages
const form = document.getElementById('employeeForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  clearErrors();

  let hasErrors = false;

  // Validate NX ID
  const nxid = form.nxid.value.trim();
  const nxidPattern = /^SRF\d{4}$/;
  if (!nxidPattern.test(nxid)) {
    setError(form.nxid, 'NX ID must start with "SRF" followed by exactly 4 digits.');
    hasErrors = true;
  }

  // Validate Name (only letters and spaces allowed)
  const name = form.name.value.trim();
  if (name === '') {
    setError(form.name, 'Name is required.');
    hasErrors = true;
  } else if (!/^[A-Z\s]+$/.test(name)) {
    setError(form.name, 'Name must contain only uppercase letters and spaces.');
    hasErrors = true;
  }

  if (!hasErrors) {
    alert(`Form submitted successfully!\nNX ID: ${nxid}\nName: ${name}`);
    form.reset();
  }
});

function setError(element, message) {
  const formGroup = element.parentElement;
  const errorSpan = formGroup.querySelector('.error');
  errorSpan.textContent = message;
  element.setAttribute('aria-invalid', 'true');
}

function clearErrors() {
  const errors = form.querySelectorAll('.error');
  errors.forEach(error => (error.textContent = ''));
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => input.removeAttribute('aria-invalid'));
}

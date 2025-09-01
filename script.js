// Elements references
const form = document.getElementById('employeeForm');
const nameInput = form.name;
const srfidInput = form.srfid;
const nxidInput = form.nxid;
const rankSelect = form.rank;
const mobileInput = form.mobile;
const emailInput = form.email;

// Uppercase transformation for inputs that require it
nameInput.addEventListener('input', () => {
  nameInput.value = nameInput.value.toUpperCase();
});

nxidInput.addEventListener('input', () => {
  nxidInput.value = nxidInput.value.toUpperCase();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  clearErrors();

  let hasErrors = false;

  // Name Validation: Required, uppercase letters and spaces only
  const nameVal = nameInput.value.trim();
  if (!nameVal) {
    setError(nameInput, 'Name is required.');
    hasErrors = true;
  } else if (!/^[A-Z\s]+$/.test(nameVal)) {
    setError(nameInput, 'Name must contain only uppercase letters and spaces.');
    hasErrors = true;
  }

  // SRF ID Validation: Required, numeric only
  const srfidVal = srfidInput.value.trim();
  if (!srfidVal) {
    setError(srfidInput, 'SRF ID is required.');
    hasErrors = true;
  } else if (!/^\d+$/.test(srfidVal)) {
    setError(srfidInput, 'SRF ID must contain only numbers.');
    hasErrors = true;
  }

  // NX ID Validation: Required, pattern SRF followed by exactly 4 digits
  const nxidVal = nxidInput.value.trim();
  if (!nxidVal) {
    setError(nxidInput, 'NX ID is required.');
    hasErrors = true;
  } else if (!/^SRF\d{4}$/.test(nxidVal)) {
    setError(nxidInput, 'NX ID must start with "SRF" followed by exactly 4 digits.');
    hasErrors = true;
  }

  // Rank Validation: Required selection
  const rankVal = rankSelect.value;
  if (!rankVal) {
    setError(rankSelect, 'Please select your rank.');
    hasErrors = true;
  }

  // Mobile Number Validation: Required, exactly 10 digits
  const mobileVal = mobileInput.value.trim();
  if (!mobileVal) {
    setError(mobileInput, 'Mobile Number is required.');
    hasErrors = true;
  } else if (!/^\d{10}$/.test(mobileVal)) {
    setError(mobileInput, 'Mobile Number must be exactly 10 digits.');
    hasErrors = true;
  }

  // Email Validation: Required, HTML5 email validation will cover format
  const emailVal = emailInput.value.trim();
  if (!emailVal) {
    setError(emailInput, 'Email ID is required.');
    hasErrors = true;
  }

  if (!hasErrors) {
    alert('Form submitted successfully!\n' +
      `Name: ${nameVal}\nSRF ID: ${srfidVal}\nNX ID: ${nxidVal}\nRank: ${rankSelect.options[rankSelect.selectedIndex].text}\nMobile: ${mobileVal}\nEmail: ${emailVal}`);
    form.reset();
  }
});

function setError(element, message) {
  const formGroup = element.parentElement;
  const errorSpan = formGroup.querySelector('.error');
  errorSpan.textContent = message;
  element.setAttribute('aria-invalid', 'true');
  element.focus();
}

function clearErrors() {
  const errors = form.querySelectorAll('.error');
  errors.forEach(error => (error.textContent = ''));
  const inputs = form.querySelectorAll('input, select');
  inputs.forEach(input => input.removeAttribute('aria-invalid'));
}

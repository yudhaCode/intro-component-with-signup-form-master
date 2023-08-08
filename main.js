const claimBtn = document.querySelector('.submit');
const inputFields = document.querySelectorAll('input');

// Regular expression for validating email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

claimBtn.addEventListener('click', (e) => {
  e.preventDefault();
  inputFields.forEach((input) => {
    const inputName = input.getAttribute('placeholder');
    const inputValue = input.value;

    // Remove any existing alert messages and icons
    const existingAlert = input.nextElementSibling;
    if (existingAlert && existingAlert.classList.contains('alert-msg')) {
      input.parentElement.removeChild(existingAlert);
      input.classList.remove('alert-input'); // Remove the alert class
    }

    const existingIcon = input.nextElementSibling;
    if (existingIcon && existingIcon.classList.contains('alert-icon')) {
      input.parentElement.removeChild(existingIcon);
    }

    if (!inputValue && !input.classList.contains('alert-input')) {
      // Create and add alert message and icon
      const alertMsg = document.createElement('p');
      alertMsg.innerText = `${inputName} cannot be empty`;
      alertMsg.classList.add('alert-msg'); // Add a class for styling
      input.insertAdjacentElement('afterend', alertMsg);

      const alertIcon = document.createElement('i');
      alertIcon.classList.add('fas', 'fa-exclamation-circle', 'alert-icon'); // Add Font Awesome classes
      input.insertAdjacentElement('afterend', alertIcon);

      input.classList.add('alert-input'); // Add the alert class to input
    } else if (
      input.getAttribute('type') === 'email' &&
      !emailRegex.test(inputValue) &&
      !input.classList.contains('alert-input')
    ) {
      // Create and add alert message and icon
      const alertMsg = document.createElement('p');
      alertMsg.innerText = `Looks like this is not a valid email`;
      alertMsg.classList.add('alert-msg'); // Add a class for styling
      input.insertAdjacentElement('afterend', alertMsg);

      const alertIcon = document.createElement('i');
      alertIcon.classList.add('fas', 'fa-exclamation-circle', 'alert-icon'); // Add Font Awesome classes
      input.insertAdjacentElement('afterend', alertIcon);

      input.classList.add('alert-input'); // Add the alert class to input
    }
  });
});

// Add event listeners to input fields to clear icons and messages on typing
inputFields.forEach((input) => {
  input.addEventListener('input', () => {
    const existingAlert = input.nextElementSibling;
    if (existingAlert && existingAlert.classList.contains('alert-msg')) {
      input.parentElement.removeChild(existingAlert);
      input.classList.remove('alert-input');
    }

    const existingIcon = input.nextElementSibling;
    if (existingIcon && existingIcon.classList.contains('alert-icon')) {
      input.parentElement.removeChild(existingIcon);
    }
  });
});

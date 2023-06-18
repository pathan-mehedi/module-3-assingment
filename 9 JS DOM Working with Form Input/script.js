document.addEventListener('DOMContentLoaded', function() {
    // Get references to the form and error elements
    let form = document.getElementById('myForm');
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let confirmPasswordInput = document.getElementById('confirmPassword');
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');
  
    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Clear previous error messages
      nameError.textContent = '';
      emailError.textContent = '';
      passwordError.textContent = '';
      confirmPasswordError.textContent = '';
  
      // Validate name field
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
      } else if (!/^[A-Za-z]+$/.test(nameInput.value)) {
        nameError.textContent = 'Name should contain only letters.';
      }
  
      // Validate email field
      if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format.';
      }
  
      // Validate password field
      if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password should have a minimum length of 8 characters.';
      } else if (!/[a-z]/.test(passwordInput.value) || !/[A-Z]/.test(passwordInput.value) || !/[0-9]/.test(passwordInput.value)) {
        passwordError.textContent = 'Password should contain at least one uppercase letter, one lowercase letter, and one digit.';
      }
  
      // Validate confirm password field
      if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
      }
    })
})
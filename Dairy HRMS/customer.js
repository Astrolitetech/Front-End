function showTab(tabId, button) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));

  // Remove active class from all buttons
  document.querySelectorAll('.tab-button').forEach(el => el.classList.remove('active'));

  // Show selected tab
  document.getElementById(tabId).classList.add('active');

  // Add active class to the clicked button
  button.classList.add('active');
}

function validateForm() {
  const name = document.getElementById("textInput").value.trim();
  const phone = document.getElementById("numberInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const address = document.getElementById("addressInput").value.trim();
  const paymentMethod = document.getElementById("dropdownInput").value;

  const textError = document.getElementById("textError");
  const numberError = document.getElementById("numberError");
  const emailError = document.getElementById("emailError");
  const addressError = document.getElementById("addressError");
  const dropdownError = document.getElementById("dropdownError");

  const nameRegex = /^[a-zA-Z\s]+$/;
  const numberRegex = /^[0-9]{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  // Name validation
  if (name === "") {
    textError.textContent = "Name is required.";
    isValid = false;
  } else if (!nameRegex.test(name)) {
    textError.textContent = "Name must contain letters only.";
    isValid = false;
  } else {
    textError.textContent = "";
  }

  // Phone validation
  if (phone === "") {
    numberError.textContent = "Phone number is required.";
    isValid = false;
  } else if (!numberRegex.test(phone)) {
    numberError.textContent = "Enter a valid 10-digit phone number.";
    isValid = false;
  } else {
    numberError.textContent = "";
  }

  // Email validation
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Address validation
  if (address === "") {
    addressError.textContent = "Address cannot be empty.";
    isValid = false;
  } else {
    addressError.textContent = "";
  }

  // Dropdown validation
  if (paymentMethod === "") {
    dropdownError.textContent = "Please select a payment method.";
    isValid = false;
  } else {
    dropdownError.textContent = "";
  }

  return isValid; // prevents form submit if false
  
}
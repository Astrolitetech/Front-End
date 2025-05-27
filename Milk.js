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


const supplieropenBtn = document.getElementById("openSupplierPopupBtn");
const paymentopenBtn = document.getElementById("openPaymentPopupBtn");
const milkopenBtn = document.getElementById("openMilkPopupBtn");
const qualityopenBtn = document.getElementById("openQualityPopupBtn");
const paymentsopenBtn = document.getElementById("openPaymentsPopupBtn");

const suppliercloseBtn = document.getElementById("closeSupplierPopupBtn");
const paymentcloseBtn = document.getElementById("closePaymentPopupBtn");
const milkcloseBtn = document.getElementById("closeMilkPopupBtn");
const qualitycloseBtn = document.getElementById("closeQualityPopupBtn");
const paymentscloseBtn = document.getElementById("closePaymentsPopupBtn");

const supplierpopup = document.getElementById("supplierpopupForm");
const paymentpopup = document.getElementById("paymentpopupForm");
const milkpopup = document.getElementById("milkpopupForm");
const qualitypopup = document.getElementById("qualitypopupForm");
const paymentspopup = document.getElementById("paymentspopupForm");

const overlay = document.getElementById("overlay");

// Display functions
supplieropenBtn.onclick = function () {
  supplierpopup.style.display = "block";
  overlay.style.display = "block";
}

paymentopenBtn.onclick = function () {
  paymentpopup.style.display = "block";
  overlay.style.display = "block";
}

milkopenBtn.onclick = function () {
  milkpopup.style.display = "block";
  overlay.style.display = "block";
}

qualityopenBtn.onclick = function () {
  qualitypopup.style.display = "block";
  overlay.style.display = "block";
}

paymentsopenBtn.onclick = function () {
  paymentspopup.style.display = "block";
  overlay.style.display = "block";
}

// Closing functions
suppliercloseBtn.onclick = function () {
  supplierpopup.style.display = "none";
  overlay.style.display = "none";
}

paymentcloseBtn.onclick = function () {
  paymentpopup.style.display = "none";
  overlay.style.display = "none";
}

milkcloseBtn.onclick = function () {
  milkpopup.style.display = "none";
  overlay.style.display = "none";
}

qualitycloseBtn.onclick = function () {
  qualitypopup.style.display = "none";
  overlay.style.display = "none";
}

paymentscloseBtn.onclick = function () {
  paymentspopup.style.display = "none";
  overlay.style.display = "none";
}

// Optional: close popup when clicking on the overlay
overlay.onclick = function () {
  supplierpopup.style.display = "none";
  paymentpopup.style.display = "none";
  milkpopup.style.display = "none";
  qualitypopup.style.display = "none";
  paymentspopup.style.display = "none";
  overlay.style.display = "none";
}


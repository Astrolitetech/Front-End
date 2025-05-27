function showTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}


const useropenBtn = document.getElementById("openUserPopupBtn");
const usercloseBtn = document.getElementById("closeUserPopupBtn");
const userpopup = document.getElementById("userpopupForm");
const overlay = document.getElementById("overlay");

useropenBtn.onclick = function () {
  userpopup.style.display = "block";
  overlay.style.display = "block";
}

usercloseBtn.onclick = function () {
  userpopup.style.display = "none";
  overlay.style.display = "none";
}

overlay.onclick = function () {
  userpopup.style.display = "none";
  overlay.style.display = "none";
}
const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || message === "") {
    messageBox.textContent = "Vui lòng nhập đầy đủ thông tin.";
    messageBox.className = "error";
    return;
  }

  if (!emailPattern.test(email)) {
    messageBox.textContent = "Email không đúng định dạng.";
    messageBox.className = "error";
    return;
  }

  messageBox.textContent = "Gửi thông tin thành công!";
  messageBox.className = "success";
  form.reset();
});
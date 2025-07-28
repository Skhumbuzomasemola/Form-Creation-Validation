<script src="script.js">
        document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback")
    const usernameInput = document.getElementById('username').value.trim();
    const usernameError = document.getElementById('usernameError');
   Username Validation (no direct use of username.length)
    if (username === "" || username.split("").length < 3) {
      usernameError.textContent = "Username must be at least 3 characters long.";
      isValid = false;
    }
    const emailInput = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    let isValid = true;
    let messages = [];

if (!email.includes("@") || !email.includes(".")) {
  isValid = false;
  messages.push("Email must include '@' and '.' characters.");
}

    const passwordInput = document.getElementById('password').value.trim();
    const passwordError = document.getElementById('passwordError');
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be  at least 8 characters long.';
        return;
    } else {
        passwordError.textContent = '';
    }

    const feedbackDiv = document.getElementById("feedback");
feedbackDiv.style.display = "block";

if (isValid) {
  feedbackDiv.textContent = "Registration successful!";
  feedbackDiv.style.color = "#28a745"; // Green color
} else {
  feedbackDiv.innerHTML = messages.join("<br>");
  feedbackDiv.style.color = "#dc3545"; // Red color
}


}
    </script>

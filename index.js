const emailInput = document.getElementById("emailInput");
const submitBtn = document.getElementById("submitBtn");
const errorMsg = document.getElementById("errorMsg");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !validEmail.test(email)) {
        emailInput.classList.add("error");
        errorMsg.classList.add("error-visible");
    } else {
        emailInput.classList.remove("error");
        errorMsg.classList.remove("error-visible");
        alert("Email submitted successfully!");
    }
});

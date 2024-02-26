const signupForm = document.querySelector(".sign-up-form-wrapper");
const successMessage = document.querySelector(".success-message-wrapper");
const form = document.querySelector(".submit-form");
const successButton = document.querySelector("#success-button");

successMessage.style.display = "none"; // Firstly, display none for the success message

const submitButton = document.querySelector("#submit-button");
const formAlert = document.querySelector("#alert");
const emailInput = document.querySelector("#email-address");

// Pattern for Email Address
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function emailValidation() {
    if (!emailInput.value.match(emailRegex)) {
        formAlert.style.visibility = "visible";
        emailInput.style.border = "1.5px solid hsl(4, 100%, 67%)";
        emailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
        emailInput.style.color = "hsl(4, 100%, 67%)";
    } else {
        formAlert.style.visibility = "hidden";
        emailInput.style.border = "1.5px solid hsl(121, 100%, 59%)";
        emailInput.style.backgroundColor = "hsla(121, 100%, 59%, 0.1)";
        emailInput.style.color = "hsl(121, 100%, 30%)";
    }
}

emailInput.addEventListener("input", () => {
    emailValidation();
});

submitButton.addEventListener("click", (e) => {
    if (!emailInput.value.match(emailRegex)) {
        emailValidation();
    } else {
        signupForm.style.display = "none";
        successMessage.style.display = "block";
    }
    e.preventDefault();
    e.stopImmediatePropagation(); // You can add this line if your form get submitted twice
});

successButton.addEventListener("click", (e) => {
    signupForm.style.display = "flex";
    successMessage.style.display = "none";
    emailInput.style.border = "1px solid gray";
    emailInput.style.backgroundColor = "transparent";
    form.reset(); // Reset the form
});

// Get the modals
var signUpModal = document.getElementById("signup-modal");
var signInModal = document.getElementById("signin-modal");

// Get the buttons
var signUpBtn = document.getElementById("signup-btn");
var signInBtn = document.getElementById("signin-btn");

// Open the modal
openModal = modal => {
    modal.style.display = "block";
};

// Close the modal
closeModal = modal => {
    modal.style.display = "none";
};

// Event to handle the click on Signin/signup buttons
signInBtn.addEventListener("click", () => openModal(signInModal));
signUpBtn.addEventListener("click", () => openModal(signUpModal));
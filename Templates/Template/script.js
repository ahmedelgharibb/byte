// Password (stored securely in localStorage)
const PASSWORD = "admin123"; // Default password (you can change it)

// Check if password is already set in localStorage
if (!localStorage.getItem("editPassword")) {
    localStorage.setItem("editPassword", PASSWORD);
}

// DOM Elements
const editButton = document.getElementById("editButton");
const passwordModal = document.getElementById("passwordModal");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const errorMessage = document.getElementById("errorMessage");
const closeModal = document.querySelector(".close");

// Open modal when edit button is clicked
editButton.addEventListener("click", () => {
    passwordModal.style.display = "flex";
});

// Close modal when close button is clicked
closeModal.addEventListener("click", () => {
    passwordModal.style.display = "none";
    passwordInput.value = "";
    errorMessage.style.display = "none";
});

// Submit password
submitPassword.addEventListener("click", () => {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === localStorage.getItem("editPassword")) {
        // Correct password: Enable editing
        enableEditing(true);
        passwordModal.style.display = "none";
        passwordInput.value = "";
        errorMessage.style.display = "none";
    } else {
        // Incorrect password: Show error message
        errorMessage.textContent = "Incorrect password. Please try again.";
        errorMessage.style.display = "block";
    }
});

// Function to enable/disable editing
function enableEditing(enable) {
    const editableElements = document.querySelectorAll("[contenteditable]");
    editableElements.forEach((element) => {
        element.contentEditable = enable;
        if (enable) {
            element.style.border = "1px dashed var(--primary)";
            element.style.padding = "5px";
        } else {
            element.style.border = "none";
            element.style.padding = "0";
        }
    });
}

// Disable editing by default on page load
enableEditing(false);
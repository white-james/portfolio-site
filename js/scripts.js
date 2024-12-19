// This file contains JavaScript code for interactive features of the portfolio website.

// Function to validate contact form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        valid = false;
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        valid = false;
    }

    return valid;
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Function to dynamically update content (if needed)
function updateContent() {
    // Example of dynamic content update
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
}

// Call updateContent on page load
window.onload = updateContent;
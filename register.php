<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Your Account</title>
    <link rel="stylesheet" href="style.css"> <!-- Link to external CSS -->
</head>
<body>

<div class="form-container">
    <div class="form-header">
        <h2>Register Your Account</h2>
        <p>New user? Please take a min to fill in your information. You will only have to do this once. We promise!</p>
        <div class="form-icons">
            <span>Save Favorites</span>
            <span>Get Alerts</span>
            <span>Sync Devices</span>
            <span>Add Listing</span>
        </div>
    </div>

    <form action="submit_registration.php" method="POST" class="register-form" id="registerForm" onsubmit="return validateForm()">
        <div class="form-group">
            <label for="userType">User Type<span class="required">*</span></label>
            <select name="userType" id="userType" required>
                <option value="">Select User type</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
            </select>
            <small id="userTypeError" class="error-message"></small>
        </div>

        <div class="form-group">
            <label for="firstName">First Name<span class="required">*</span></label>
            <input type="text" id="firstName" name="firstName" placeholder="First Name" required>
            <small id="firstNameError" class="error-message"></small>
        </div>

        <div class="form-group">
            <label for="lastName">Last Name<span class="required">*</span></label>
            <input type="text" id="lastName" name="lastName" placeholder="Last Name" required>
            <small id="lastNameError" class="error-message"></small>
        </div>

        <div class="form-group">
            <label for="email">Email<span class="required">*</span></label>
            <input type="email" id="email" name="email" placeholder="Email Address" required>
            <small id="emailError" class="error-message"></small>
        </div>

        <div class="form-group">
            <label for="mobile">Mobile<span class="required">*</span></label>
            <input type="text" id="mobile" name="mobile" placeholder="Mobile Number" required>
            <small id="mobileError" class="error-message"></small>
        </div>

        <div class="form-group">
            <label for="password">Password<span class="required">*</span></label>
            <input type="password" id="password" name="password" placeholder="Password" required>
            <small id="passwordError" class="error-message"></small>
        </div>

        <div class="form-group">
            <label for="confirmPassword">Confirm Password<span class="required">*</span></label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required>
            <small id="confirmPasswordError" class="error-message"></small>
        </div>

        <div class="form-group captcha">
            <div class="g-recaptcha" data-sitekey="your-site-key"></div>
        </div>

        <button type="submit" class="signup-btn">Sign Up</button>

        <div class="login-link">
            <p>Already Registered User? <a href="login.php">Login</a></p>
        </div>
    </form>
</div>

<script>
function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // User Type validation
    const userType = document.getElementById('userType');
    if (userType.value === "") {
        document.getElementById('userTypeError').textContent = "Please select a user type.";
        isValid = false;
    }

    // First Name validation
    const firstName = document.getElementById('firstName');
    if (firstName.value === "") {
        document.getElementById('firstNameError').textContent = "First Name is required.";
        isValid = false;
    }

    // Last Name validation
    const lastName = document.getElementById('lastName');
    if (lastName.value === "") {
        document.getElementById('lastNameError').textContent = "Last Name is required.";
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Mobile validation
    const mobile = document.getElementById('mobile');
    if (!/^\d{10}$/.test(mobile.value)) {
        document.getElementById('mobileError').textContent = "Mobile number must be 10 digits.";
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password');
    if (password.value.length < 8 || !/[A-Z]/.test(password.value) || !/\d/.test(password.value)) {
        document.getElementById('passwordError').textContent = "Password must be at least 8 characters long, contain one uppercase letter and one number.";
        isValid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value !== password.value) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
}

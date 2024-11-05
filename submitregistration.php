<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userType = $_POST['userType'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    // Perform validation and save the data to the database
    if ($password === $confirmPassword) {
        // Hash password and store data in your database
        echo "Registration successful!";
    } else {
        echo "Passwords do not match!";
    }
}
?>

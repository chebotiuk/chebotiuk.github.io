<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['date'])) {$date = $_POST['date'];}
    if (isset($_POST['password'])) {$password = $_POST['password'];}
    if (isset($_POST['passwordConfirm'])) {$passwordConfirm = $_POST['passwordConfirm'];}
?>
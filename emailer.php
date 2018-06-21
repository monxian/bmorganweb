<?php

$to = 'kbutski@gmail.com';
$subject = "Email from website";
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$headers .="Content-type: text/html;\r\n";
$headers .= "From : $email";

mail($to, $subject, $message, $headers);
echo "Email sent";


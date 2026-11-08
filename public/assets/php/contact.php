<?php
// contact.php
header('Content-Type: application/json');

// Set your email
$to = "adam@purposebuiltfilms.com, info@purposebuiltfilms.com";
$fromemail = "no-reply@purposebuiltfilms.com";

// Get POST data safely
$name = htmlspecialchars(trim($_POST['name'] ?? ''));
$email = htmlspecialchars(trim($_POST['email'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

// Validate
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

// Email content
$subject = "New contact form message from $name";
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

// Send the email
$headers = "From: $fromemail\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
}
?>
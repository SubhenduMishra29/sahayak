<?php
$host = 'localhost';
$db = 'xyou_fitness';
$user = 'root';      // Update as needed
$pass = '';          // Update as needed

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
?>

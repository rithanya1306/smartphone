<?php
// This file connects PHP to MySQL. Every php page includes this file.
// For XAMPP the default values below work.
// On Render we give the values using environment variables.

session_start();
mysqli_report(MYSQLI_REPORT_OFF);

$host   = getenv("DB_HOST") ?: "localhost";
$user   = getenv("DB_USER") ?: "root";
$pass   = getenv("DB_PASS") ?: "";
$dbname = getenv("DB_NAME") ?: "smart_phone";
$port   = (int)(getenv("DB_PORT") ?: 3306);

$conn = mysqli_init();
$flags = 0;
if (getenv("DB_SSL")) {
    // cloud databases need a secure (SSL) connection
    $flags = MYSQLI_CLIENT_SSL | MYSQLI_CLIENT_SSL_DONT_VERIFY_SERVER_CERT;
}

if (!mysqli_real_connect($conn, $host, $user, $pass, $dbname, $port, null, $flags)) {
    die("Could not connect to the database. Check db.php settings.");
}
mysqli_set_charset($conn, "utf8mb4");

// shows a small result page (used after register, login, buy)
function show_message($title, $message, $link, $link_text) {
    echo "<!DOCTYPE html><html><head><meta charset='UTF-8'>";
    echo "<meta name='viewport' content='width=device-width, initial-scale=1'>";
    echo "<title>$title</title><link rel='stylesheet' href='style.css'></head><body>";
    echo "<div class='header'><h1>$title</h1></div>";
    echo "<div class='box'><p class='message'>$message</p>";
    echo "<a class='btn' href='$link'>$link_text</a></div>";
    echo "</body></html>";
    exit;
}
?>

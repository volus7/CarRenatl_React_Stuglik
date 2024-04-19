<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "rent_the_car";


$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}



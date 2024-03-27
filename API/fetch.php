<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "rent_the_car";

$conn = new mysqli($servername, $username, $password, $database);

$q = "SELECT * FROM brands";

$res = $conn->query($q);
$response = [];

while ($row = $res->fetch_assoc()) {
    $response[] = $row;
}

header('Content-Type: application/json');
echo json_encode($response);
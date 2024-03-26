<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "rent_the_car";



$conn = new mysqli($servername, $username, $password, $database);

$q = "SELECT * FROM brands";

$res = $conn->query($q);
$response = fetch_assoc();

while($row = $res -> fetch_assoc()){
printf ("%s (%s)\n", $row["brand_id"], $row["brand_name"]);
}


echo json_encode($response);
<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "rent_the_car";
$q = "SELECT * FROM brands";


$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$res = $conn->query($q);
while($row = $res -> fetch_assoc()){
printf ("%s (%s)\n", $row["brand_id"], $row["brand_name"]);
}


$conn -> close();



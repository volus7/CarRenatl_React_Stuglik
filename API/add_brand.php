<?php
header('Access-Control-Allow-Origin: *');

require_once "db_connect.php";

$input = $_POST["brand_name"];

$q = "INSERT INTO `brands`(`brand_id`, `brand_name`) VALUES (null,'$input')";

$res = $conn->query($q);


header('Content-Type: application/json');
echo json_encode([
    "msg" => "gitara"
]);
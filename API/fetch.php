<?php
header('Access-Control-Allow-Origin: *');
require_once "db_connect.php";

$table_name = $_POST['table_name'];

$q = "SELECT * FROM $table_name";

$res = $conn->query($q);
$response = [];

while ($row = $res->fetch_assoc()) {
    $response[] = $row;
}

header('Content-Type: application/json');
echo json_encode($response);
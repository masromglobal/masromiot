<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
 
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
        exit(0);
    }
 
  require "dbconnect.php";

$sql = "SELECT * FROM loc_use ;";
$result = mysqli_query($con,$sql);
$response = array();

while($row = mysqli_fetch_array($result))
{
	array_push($response, array("usage_id"=>$row[0],
				    "eq_id"=>$row[1],
				    "eq_name"=>$row[2],
				    "date"=>$row[3],
				    "tm_start"=>$row[4],
				    "tm_stop"=>$row[5],
				    "tm_usage"=>$row[6] ));
}

echo json_encode( $response);
mysqli_close($con)

?>
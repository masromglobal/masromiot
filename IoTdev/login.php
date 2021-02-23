<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "dbconnect.php";
$contentdata = file_get_contents("php://input");
$getdata = json_decode($contentdata);

$user = $getdata->user;
$pass = $getdata->pass;

$sql = "SELECT * FROM users WHERE  username = '$user' AND password='$pass' ";
$result = mysqli_query($con,$sql);

$numrow = mysqli_num_row($result);

if($numrow == 1){
  $arr = array();
  while($row = mysqli_fetch_assoc($result)){
    $arr[] =$row;

  }
  echo json_encode($arr);
  mysqli_close($con);
}else{
  echo json_encode(null);
}
?>
<?php

        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With"); 
       	header("Content-Type: application/json; charset=utf-8");    // cache for 1 day
   	
	include "IoTdev/dbconnect.php";
	$postjson = json_decode(file_get_contents('php://input'),true);
	
	if($postjson['aksi']=='add'){
	
	$query = mysqli_query($mysqli, "INSERT INTO companydata SET
	   	CompanyName = '$postjson[CompanyName]',
	   	eq_id = '$postjson[eq_id]'
		")

	$compid = mysqli_insert_id($mysqli);

	if($query) $result = json_encode(array('success'=>true, 'Comp_id' => $compid));
	else $result = json_encode(array('success'=>false));

	echo $result;
 
	   	
   }
?>
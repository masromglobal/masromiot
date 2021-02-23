<?php

if (isset($_SERVER[‘HTTP_ORIGIN’])) {
	header('Access-Control-Allow-Origin: *');
        header(‘Access-Control-Allow-Credentials: true’);

        header(‘Access-Control-Max-Age: 86400’);    // cache for 1 day

    }

    // Access-Control headers are received during OPTIONS requests

    if ($_SERVER[‘REQUEST_METHOD’] == ‘OPTIONS’) 

        if (isset($_SERVER[‘HTTP_ACCESS_CONTROL_REQUEST_METHOD’]))

            header(“Access-Control-Allow-Methods: GET, POST, OPTIONS”);        

        if (isset($_SERVER[‘HTTP_ACCESS_CONTROL_REQUEST_HEADERS’]))

            header(“Access-Control-Allow-Headers:        {$_SERVER[‘HTTP_ACCESS_CONTROL_REQUEST_HEADERS’]}”);

         exit(0);

    }

 

  require “dbconnect.php”;

    $data = file_get_contents(“php://input”);

    if (isset($data)) {

        $request = json_decode($data);

        $CompanyName = $request->CompanyName;

         $eq_id = $request->eq_id;                

                }

$CompanyName = stripslashes($CompanyName);

$eq_id = stripslashes($eq_id);

 

/////// Check to see that the database does not contain repeated information

 $sql = “SELECT id FROM companydata WHERE CompanyName = ‘$CompanyName'”;

      $result = mysqli_query($db,$sql);

      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);

      $active = $row[‘active’];

    $count = mysqli_num_rows($result);

      // If result matched country and $country, table row must be 1 row                   

      if($count >0) {

      $response=  “Company already exists in our database”;

      }else {

  $sql = “SELECT id FROM companydata WHERE eq_id = ‘$eq_id'”;

      $result = mysqli_query($db,$sql);

      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);

      $active = $row[‘active’];

      $count = mysqli_num_rows($result);

      // If result matched capital and $capital, table row must be 1 row           

      if($count >0) {

      $response= “eq_id already exists, there are no two companydata with the same eq_id”;

      }                 

                  else

 {

$sql = “INSERT INTO users (CompanyName, eq_id)

VALUES (‘$CompanyName’, ‘$eq_id’)”;

if ($con->query($sql) === TRUE) {

                $response= “post successfull”;

} else {

   $response= “Error: ” . $sql . “<br>” . $db->error;

}

} 

                echo json_encode( $response);

$db->close();

?>

<?php

	define('HOST','localhost');
	define('USER','root');
	define('PASS','');
	define('DB', 'iotdevice');
	$con = mysqli_connect(HOST,USER,PASS,DB);
	
	if (!$con) {
		die("Error in Connection" .mysqli_connect_error());
	}

?>
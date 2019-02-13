<?php
header('Content-type: application/json');
  
require('var.php');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$query =  "INSERT INTO `hazmit`(`id`, `hazard`, `mitigation`, `source`, `tags`, `crafts`, `review`, `bad`) VALUES ('',\'addslashes($_POST[hazard])\', \'addslashes($_POST[mitigation])\', \'$_POST[source]\', \'$_POST[tags]\', \'$_POST[crafts]\', 0, 1)";
	db_query($query);
	$response_array['status'] = 'success'; 
}else{
	$response_array['status'] = 'error';  
		 
		 }
  echo json_encode($response_array);
 echo mysqli_error(db_connect());
//  echo "test";
?>

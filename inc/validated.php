<?php
header('Content-type: application/json');

require('var.php');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$id = $_POST['id'];
	$fac = $_POST['facility'];
	$flag = $_POST['flag'];
	if($flag === "Validated"){
$query =  "UPDATE `hazmit` SET `facilitys` = CONCAT(IFNULL(`facilitys`, ''), '$fac,') WHERE `id` = $id";
}else{
$query =  "UPDATE `hazmit` SET `facilitys` = Replace(`facilitys`, '$fac,', '') WHERE `id` = $id";
}
	db_query($query);
// echo $query;
	$response_array['status'] = 'success';
}else{
	$response_array['status'] = 'error';

		 }
  echo json_encode($response_array);
 echo mysqli_error(db_connect());
//  echo "test";
?>

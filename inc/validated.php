<?php
header('Content-type: application/json');

require('var.php');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$id = $_POST['id'];
	$fac = $_POST['facility'];
	$flag = $_POST['flag'];

	switch ($flag) {
    case "Validated":
        $query =  "UPDATE `hazmit` SET `facilitys` = CONCAT(IFNULL(`facilitys`, ''), '$fac,') WHERE `id` = $id";
				db_query($query);
				$response_array['status'] = 'success';
				break;
    case "Invalidated":
        $query =  "UPDATE `hazmit` SET `facilitys` = Replace(`facilitys`, '$fac,', '') WHERE `id` = $id";
				db_query($query);
				$response_array['status'] = 'success';
				break;
    case "Review":
        $query =  "UPDATE `hazmit` SET `review` = 0 , `bad` = 0 , `facilitys` = Replace(`facilitys`, '$fac,', '') WHERE `id` = $id";
				db_query($query);
				$response_array['status'] = 'success';
				break;
    default:
        $response_array['status'] = 'error';
}
}
// echo $query;
  echo json_encode($response_array);
 echo mysqli_error(db_connect());
//  echo "test";

?>

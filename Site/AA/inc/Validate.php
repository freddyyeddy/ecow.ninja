<?php
header('Content-type: application/json');

require('../../inc/var.php');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$id = $_POST['id'];
	$fac = $_POST['AA'];
	$flag = $_POST['flag'];
	$reason = "";
	if(isset($_POST['reason'])) $reason = $_POST['reason'];

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
		$reason = "$fac Said: $reason";
        $query =  "UPDATE `hazmit` SET `review` = 0 , `reviewtxt` = '$reason', `bad` = 0 , `facilitys` = Replace(`facilitys`, '$fac,', '') WHERE `id` = $id";
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

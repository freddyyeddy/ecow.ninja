<?php
require('var.php');
// var_dump($_GET);
if(is_null($_GET[q])){
    $query = "SELECT * FROM `hazmit` WHERE 1";
}else{
    switch ($_GET[q]) {
        case 0:
           $query =  "SELECT * FROM `hazmit` WHERE 1 limit 1";
            break;
        case 1:
            echo "i equals 1";
            break;
        case 2:
            echo "i equals 2";
            break;
      default:
        $query =  "SELECT * FROM `hazmit` WHERE 1";
 }
}
$rows = db_select($query);
if($rows === false) {
    $error = db_error();
    // Handle error - inform administrator, log to file, show error page, etc.
}

echo json_encode($rows);

?>
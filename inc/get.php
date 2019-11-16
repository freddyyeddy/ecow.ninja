<?php
require('var.php');
// var_dump($_GET);

 $query =  "SELECT * FROM `hazmit` WHERE `review` >= 2 and `bad` >= 2";
$rows = db_select($query);
if($rows === false) {
    $error = db_error();
    // Handle error - inform administrator, log to file, show error page, etc.
}

array_walk_recursive($rows, function (&$v, $k) { 
    if($k == 'tags' || $k == 'crafts'){ 
        $v = ucwords(strtolower($v), ","); 
    } 
});


echo json_encode($rows);

?>

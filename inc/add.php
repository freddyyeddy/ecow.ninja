<?php
require('var.php');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

$query =  "INSERT INTO `hazmit`(`id`, `hazard`, `mitigation`, `source`, `tags`, `crafts`, `review`, `bad`) VALUES ('','$_POST[hazard]', '$_POST[mitigation]', '$_POST[source]', '$_POST[tags]', '$_POST[crafts]', 0, 1)";
echo $query;
	db_select($query);
}else{
	echo "no post data";
		 
		 }




?>
<?php
include("var.php");
$magic = $_GET['mg'];
$fac = $_GET['f'];
$ses = $_GET['s'];
db_query("UPDATE `aas` SET `Magic`= '$magic', `session` = '$ses' WHERE `Facility` = '$fac'");
echo "UPDATE `aas` SET `Magic`= '$magic', `session` = '$ses' WHERE `Facility` = '$fac'";

 ?>

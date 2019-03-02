<?php
session_start();
if(isset($_GET['s']) and isset($_SESSION['ses'])){
if($_GET['s'] == $_SESSION['ses']){

echo "TRUE";
session_destroy();
}

}else{
  echo "FALSE";
}


?>

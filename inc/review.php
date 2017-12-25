<?php
require('var.php');



foreach( $_POST as $key => $value ) {
  if($value){
      $query = "UPDATE `hazmit` SET `bad` = `bad` + 1 , `review` = `review` +1   WHERE `id` = $key";
	db_select($query);
  }else{
//     UPDATE `hazmit` SET `bad` = `bad` + 1   WHERE `id` = $key;
  $query = "UPDATE `hazmit` SET `bad` = `bad` - 1 , `review` = `review` +1   WHERE `id` = $key";
	db_select($query);
  }

}





?>

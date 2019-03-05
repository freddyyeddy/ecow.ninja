<?php
require('var.php');



foreach( $_POST as $key => $value ) {
// 	echo "key is :$key  and value is :$value";
  if($value === 'true'){
      $query = "UPDATE `hazmit` SET `bad` = `bad` + 1 , `review` = `review` +1   WHERE `id` = $key";
	db_query($query);
  }else{
//     UPDATE `hazmit` SET `bad` = `bad` + 1   WHERE `id` = $key;
  $query = "UPDATE `hazmit` SET `bad` = `bad` - 1 , `review` = `review` +1   WHERE `id` = $key";
	db_query($query);
  }

}





?>

<?php
include("var.php");
$vote = 0;


if ($_SERVER['REQUEST_METHOD']=== "POST") {


  // Setting Update Values
    $id = $_POST['id'];
    $vote = intval($_POST['vote']) + $vote;
    // echo "vote value is $vote";
    $query = "UPDATE `favorites` SET `score` = `score` + $vote WHERE `id`=$id";
  // Update Values Set
  // Updating the Results

    db_query($query);
  // Returning Returing Values if there is an error or sucssess onto page
    $response_array['status'] = 'success';
    echo json_encode($response_array);
    echo mysqli_error(db_connect());


}else{
  $response_array['status'] = 'error';
  echo json_encode($response_array);
  echo mysqli_error(db_connect());


}

 ?>

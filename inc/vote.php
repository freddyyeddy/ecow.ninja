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

    $query = "SELECT MAX(`score`) as max FROM `favorites` WHERE MONTH(CURDATE()) = MONTH(`timestamp`)";
    $max = db_select($query);
    $query = "SELECT `score` FROM `favorites` WHERE `id` = $id";
    $score = db_select($query);
    $max = $max[0]["max"];
    $manyunits = $score[0]["score"]/$max;
    $maxpercentage = 47;
    $percentage = ($maxpercentage * $manyunits)+53;

// echo <<<HTML
//   Max Score is: $max
//   Max Percentage would be 47/$max or  : $maxpercentage
//   How many of our units compared to the max or max-our score: $manyunits
//   making the percentage to be maxpercentage/our units or $percentage
// HTML;

  // Returning Retu/47ring Values if there is an error or sucssess onto page
    $response_array['status'] = 'success';
    $response_array['id'] = $id;
    $response_array['percentage'] = $percentage;
    echo json_encode($response_array);
    echo mysqli_error(db_connect());


}else{
  $response_array['status'] = 'error';
  echo json_encode($response_array);
  echo mysqli_error(db_connect());


}

 ?>

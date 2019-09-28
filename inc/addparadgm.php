<?php
include("var.php");
// if ($_SERVER['REQUEST_METHOD']=== "POST") {
if (1 === 1) {


  // Setting Update Values
    $link = $_POST['link'];
    $description = $_POST['description'];
    $aa = $_POST['AA'];
    // echo "vote value is $vote";

    $querytest = "SELECT  1  FROM `favorites` WHERE `link` = '$link' LIMIT 1";
  if(db_select($querytest) <= 0){

  }
    $query = "UPDATE `favorites` SET `score` = `score` + $vote , `aa` = CONCAT(`aa`, '_$aa') WHERE `id`=$id";
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
    $response_array['score'] = $score[0]["score"];
    echo json_encode($response_array);
    echo mysqli_error(db_connect());


}else{
  $response_array['status'] = 'error';
  echo json_encode($response_array);
  echo mysqli_error(db_connect());


}

 ?>

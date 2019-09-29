<?php
include("var.php");
if ($_SERVER['REQUEST_METHOD']=== "POST") {
// if (1 === 1) {


  // Setting Paradigm Values
    $link = $_POST['link'];
    $description = $_POST['description'];
    $aa = $_POST['AA'];

    // $link = "Link Test None";
    // $description = "Test Description";
    // $aa = "Master";

// Testing If Link Has Been Used
    $querytest = "SELECT  1  FROM `favorites` WHERE `link` = '$link' LIMIT 1";
  if(mysqli_num_rows(db_query($querytest)) <= 0){
    // Link Is Original
      $response_array['status'] = 'success';
      $response_array['msg'] = "Submitted Your Paradigm Sucsefully";
     $query = "INSERT INTO `favorites` (`aa`, `link`, `description`, `score`) VALUES ('$aa' , '$link', '$description', 1)";
     db_query($query);
     echo json_encode($response_array);
}else{
// Link Has Been Used Becho json_encode($response_array);efore
  $response_array['status'] = 'error';
  $response_array['msg'] = "Looks Like This One Has Been Used Before Try Another";
  echo json_encode($response_array);
}

    // $query = "UPDATE `favorites` SET `score` = `score` + $vote , `aa` = CONCAT(`aa`, '_$aa') WHERE `id`=$id";
  // Update Values Set
  // Updating the Results

    // db_query($query);


// echo <<<HTML
//   Max Score is: $max
//   Max Percentage would be 47/$max or  : $maxpercentage
//   How many of our units compared to the max or max-our score: $manyunits
//   making the percentage to be maxpercentage/our units or $percentage
// HTML;

  // Returning Retu/47ring Values if there is an error or sucssess onto page

    echo mysqli_error(db_connect());

}else{
  $response_array['status'] = 'error';
  $response_array['msg'] = "Somethings Wrong Try Again Later";
  echo json_encode($response_array);


}

 ?>

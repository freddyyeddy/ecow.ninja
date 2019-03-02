<?php
session_start();
include("var.php");
// Making a unique id for storing into localstorage then going to use an ajax request post to actually check magic link and password
// if i dont detect a match in database from localstorage id then i will auto invalidate and send a new magic link with the new uid stored
// and store it in database as well as return the new uniqid and store it in local storage for new magic link test.
// Establishing Variables

$magic2 = bin2hex(random_bytes( 72 ));
$magichash2 = password_hash($magic2,PASSWORD_BCRYPT);
$ses2 = md5(uniqid(rand(), true));


// End Establishing Varaables
if(isset($_GET['mg']) and isset($_GET['f'])) {$magic = $_GET['mg']; $fac = $_GET['f'];}else{$magic = "0"; $fac = "potato";}


$query =  "SELECT * FROM `aas` WHERE  `Facility` = '$fac' and  TIMESTAMPDIFF(MINUTE, `Timestamp`, NOW()) <= 5";
// echo $query;
$rows = db_select($query);
if($rows === false) {
	 $error = db_error();
	 // var_dump($error);
	 // Handle error - inform administrator, log to file, show error page, etc.
}else{

// start email reset
$resetthethings = <<<reset

var xhttp = new XMLHttpRequest();
var xhttp2 = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 			 // after sucsessfull load
// 			 // console.log(xhttp.responseText);
// 		}
// };
// xhttp2.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 			 // after sucsessfull load
// 			 // console.log(xhttp2.responseText);
// 		}
// };


var magic = "mg=$magichash2&";
var magic2 = "mg=$magic2&";
var session = "s=$ses2&";
var fac = "f=$fac";
xhttp2.open("GET", "tst.php"+"?"+magic2+fac, true);
xhttp2.send();
xhttp.open("GET", "tst3.php"+"?"+magic+session+fac, true);
xhttp.send();

reset;
// end send reset email

	if(!empty($rows)){

		$session = $rows[0]["session"];
		$magichash = $rows[0]["Magic"];
		var_dump(password_verify($magic, $magichash));
		echo "\n" . $session .  "\n" . $magichash;
		// End vriable Setting

			// Start EOT Local Reset

		$local_test = <<<local_reset_test
		if (localStorage.getItem("session") != null) {
		var sessioncheck = new XMLHttpRequest();
		sessioncheck.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		       // after sucsessfull load
		       console.log(sessioncheck.responseText);
		    }
		};


		var ses = "s=" + localStorage.getItem("session");
		sessioncheck.open("GET", "tst5.php"+"?"ses, true);
		sessioncheck.send();
		}
local_reset_test;
			// End EOT Local Reset Bodies

		if(password_verify($magic, $magichash)){
			// setting session variable to pass without showing session to validate
$_SESSION['sess'] = $session;
			// Link Good and Hash Match is Good now getting page data from php page and testing if session matches
			echo <<<pass_match
	<script>
	// testing if I recognize borwser
	if (localStorage.getItem("session") != null) {
		console.log(localStorage.getItem("session"));
		console.log("expects: $session");
		if(localStorage.getItem("session") ==="$session"){
			// I recognize this browser Lets Get into Backend
			alert("session Match");
		}else{
			localStorage.setItem("session", "$ses2");
			// I dont recognize this browser
			alert("I dont recognize you lets make a new link just in case");
pass_match;

echo $resetthethings . "		\t\t\n}\t\n	}\n </script>";


		}else{
		// failed Hash check Fishyness is Fishy new link time
		echo "\n\n'" . $magic .  "','" . $magichash . "'";
		echo <<<hash_fail
<script>
		// I dont recognize this browser
		localStorage.setItem("session", "$ses2");
		alert("Something Seems Fishy Have a New Link...");

hash_fail;

  echo $resetthethings . "</script>";

		}

	}else{
		if($fac != "potato"){
// Nothing Found Sending new Magic link

		echo "<script>" . $resetthethings . "</script>";

}else{
	echo "Not a Valid Facility";
}
	}
}

// Making a unique id for storing into localstorage then going to use an ajax request post to actually check magic link and password
// if i dont detect a match in database from localstorage id then i will auto invalidate and send a new magic link with the new uid stored
// and store it in database as well as return the new uniqid and store it in local storage for new magic link test.
// md5(uniqid(rand(), true));                           // Set email format to HTML

// method for generaing a secure random magic password for the link
// $magic = bin2hex(random_bytes( 72 ));
// $magichash = password_hash($magic,PASSWORD_BCRYPT);
//
// print_r($magic);
// print_r("\n" . $magichash);
//
// if(password_verify($magic, $magichash)){
// 	echo "true";
// }else{
// echo "false";
// }

?>

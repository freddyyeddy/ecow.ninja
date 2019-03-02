<?php
include("var.php");
// Making a unique id for storing into localstorage then going to use an ajax request post to actually check magic link and password
// if i dont detect a match in database from localstorage id then i will auto invalidate and send a new magic link with the new uid stored
// and store it in database as well as return the new uniqid and store it in local storage for new magic link test.

if(isset($_GET['mg']) and isset($_GET['f'])) {$magic = $_GET['mg']; $fac = $_GET['f'];}else{$magic = "0"; $fac = "potato";}
$newsession = md5(uniqid(rand(), true));

$query =  "SELECT * FROM `aas` WHERE  `Facility` = '$fac' and  TIMESTAMPDIFF(MINUTE, `Timestamp`, NOW()) <= 2";
// echo $query;
$rows = db_select($query);
if($rows === false) {
	 $error = db_error();
	 // var_dump($error);
	 // Handle error - inform administrator, log to file, show error page, etc.
}else{
	// var_dump($rows);
	if(!empty($rows)){
		$magic2 = bin2hex(random_bytes( 72 ));
		$magichash2 = password_hash($magic,PASSWORD_BCRYPT);
		$ses2 = md5(uniqid(rand(), true));
		$session = $rows[0]["session"];
		if(password_verify($magic, $rows[0]["Magic"])){
			// Link Good and Hash Match is Good now getting page data from php page and testing if session matches
			echo <<<results
	<script>
	// testing if I recognize borwser
	if (localStorage.getItem("session") != null) {
		if(localStorage.getItem("session") ==="$session"){
			// I recognize this browser Lets Get into Backend
			alert("session Match");
		}else{
			// I dont recognize this browser
			alert("I dont recognize you lets make a new link just in case");
			localStorage.setItem('session', '$ses2');
				var xhttp = new XMLHttpRequest();
				var xhttp2 = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
						if (this.readyState == 4 && this.status == 200) {
							 // after sucsessfull load
							 console.log(xhttp.responseText);
						}
				};
				xhttp2.onreadystatechange = function() {
						if (this.readyState == 4 && this.status == 200) {
							 // after sucsessfull load
							 console.log(xhttp2.responseText);
						}
				};


				var magic = "mg=$magichash2&";
				var magic2 = "mg=$magic2&";
				var session = "s=$ses2&";
				var fac = "f=$fac";
				xhttp2.open("GET", "tst.php"+"?"+magic2+fac, true);
				xhttp2.send();
				xhttp.open("GET", "tst3.php"+"?"+magic+session+fac, true);
				xhttp.send();
		}
	}
	</script>

results;
		}else{
		// failed Hash check Fishyness is Fishy new link time
		echo <<<results
<script>
		// I dont recognize this browser
		alert("Something Seems Fishy Have a New Link...");
		localStorage.setItem('session', '$ses2');
			var xhttp = new XMLHttpRequest();
			var xhttp2 = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						 // after sucsessfull load
						 console.log(xhttp.responseText);
					}
			};
			xhttp2.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						 // after sucsessfull load
						 console.log(xhttp2.responseText);
					}
			};


			var magic = "mg=$magichash2&";
			var magic2 = "mg=$magic2&";
			var session = "s=$ses2&";
			var fac = "f=$fac";
			xhttp2.open("GET", "tst.php"+"?"+magic2+fac, true);
			xhttp2.send();
			xhttp.open("GET", "tst3.php"+"?"+magic+session+fac, true);
			xhttp.send();

</script>

results;
		}

	}else{
		if($fac != "potato"){

$magic = bin2hex(random_bytes( 72 ));
$magichash = password_hash($magic,PASSWORD_BCRYPT);
$ses = md5(uniqid(rand(), true));
		 print_r($magic);
		echo <<<No_Results
		<script>
		alert("No Results Returned and Submitting the databse update");
		localStorage.setItem('session', '$ses');
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						 // Action to be performed when the document is read;
						 // xhttp.responseXML
						 // alert("sucsess");
						 var xhttp2 = new XMLHttpRequest();
						 var magic = "mg=$magic&";
						 var fac = "f=$fac";
						 xhttp2.open("GET", "tst.php"+"?"+magic+fac, true);
						 xhttp2.send();
						 console.log(xhttp.responseText);
					}
			};
			var magic = "mg=$magichash&";
			var session = "s=$ses&";
			var fac = "f=$fac";
console.log(magic);
console.log(session);
console.log(fac);
			xhttp.open("GET", "tst3.php"+"?"+magic+session+fac, true);
			xhttp.send();
			</script>
No_Results;

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

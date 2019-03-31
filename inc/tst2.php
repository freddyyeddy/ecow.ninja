<?php
session_start();
include("var.php");
echo "<!DOCTYPE html>";
// Making a unique id for storing into localstorage then going to use an ajax request post to actually check magic link and password
// if i dont detect a match in database from localstorage id then i will auto invalidate and send a new magic link with the new uid stored
// and store it in database as well as return the new uniqid and store it in local storage for new magic link test.
// Establishing Variables
		//Replacement Magic Link and Session Info
		$magic2 = bin2hex(random_bytes( 72 ));
		$magichash2 = password_hash($magic2,PASSWORD_BCRYPT);
		$ses2 = md5(uniqid(rand(), true));

		//Html For Page Elements
				//Begin Html Loader
		$htmlloadercss = <<<css
<style>
.lds-grid {
  display: inline-block;
  position: relative;
	margin-left: 50%;
transform: translateX(-50%);
  width: 26.5em;
  height: 26.5em;
}
.lds-grid div {
  position: absolute;
  width: 6.5em;
  height: 6.5em;
  border-radius: 50%;
  background: #30b4e9;
  animation: lds-grid 1.2s linear infinite;
}
.lds-grid div:nth-child(1) {
  top: 0em;
  left: 0em;
  animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
  top: 0em;
  left: 10em;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
  top: 0em;
  left: 20em;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
  top: 10em;
  left: 0em;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
  top: 10em;
  left: 10em;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
  top: 10em;
  left: 20em;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
  top: 20em;
  left: 0em;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
  top: 20em;
  left: 10em;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
  top: 20em;
  left: 20em;
  animation-delay: -1.6s;
}
@keyframes lds-grid {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
css;
		$htmlloaderdiv = <<<html

<div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
html;

				//End Html Loader
// End Establishing Varaables
// Starting Head Html Tag
echo <<<EOT

<head>
$htmlloadercss

EOT;
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
			 console.log(xhttp.responseText);
// 		}
// };
// xhttp2.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 			 // after sucsessfull load
			 console.log(xhttp2.responseText);
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
		$permittemps = $rows[0]["Examples"];
		$_SESSION['sess'] = $session;
		$magichash = $rows[0]["Magic"];
		// var_dump(password_verify($magic, $magichash));
		// echo "\n" . $session .  "\n" . $magichash;
		// End vriable Setting

			// Start EOT Local Reset

		$local_test = <<<local_reset_test
		if (localStorage.getItem("session") != null) {
		var sessioncheck = new XMLHttpRequest();
		// console.log("Running Test");
		// console.log("Expected: $session");
		// console.log("Currently Set as: " + localStorage.getItem("session"));
		sessioncheck.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
       // after sucsessfull load
       // var newdiv = document.createElement('div');
       // newdiv.innerHTML = sessioncheck.responseText;
       // document.getElementsByTagName('body')[0].innerHTML = '';
       // document.getElementsByTagName('body')[0].appendChild(newdiv);
       document.getElementsByTagName('body')[0].innerHTML = sessioncheck.responseText;
			 eval($("#removeme1").text());
			 eval($("#back").text());
		};
	}


		var ses = "s=" + localStorage.getItem("session");
		sessioncheck.open("GET", "tst5.php"+"?" + ses + "&f=$fac&x=$permittemps", true);
		sessioncheck.send();
	}else{
		localStorage.setItem("session", "$ses2");
		alert("Looks Like You Havent Visited Yet Lets Fix that Sending A new Link");
		$resetthethings
	}
local_reset_test;
			// End EOT Local Reset Bodies

		if(password_verify($magic, $magichash)){
			// setting session variable to pass without showing session to validate
$_SESSION['ses'] = $session;
			// Link Good and Hash Match is Good now getting page data from php page and testing if session matches
			echo "<script id='removeme3'>" . $local_test . " var elem = document.getElementById('removeme3'); elem.parentNode.removeChild(elem);</script>";



		}else{
		// failed Hash check Fishyness is Fishy new link time
		// echo "\n\n'" . $magic .  "','" . $magichash . "'";
		echo <<<hash_fail
<script id='removeme2'>
		// I dont recognize this browser
		localStorage.setItem("session", "$ses2");
		alert("Something Seems Fishy Have a New Link...");

hash_fail;

  echo $resetthethings . " localStorage.setItem('session', '$ses2');  var elem = document.getElementById('removeme2'); elem.parentNode.removeChild(elem);</script>";

		}

	}else{
		if($fac != "potato"){
// Nothing Found Sending new Magic link

		echo "<script id='removeme'>" . $resetthethings . " alert('link expired a new link has been sent'); localStorage.setItem('session', '$ses2'); var elem = document.getElementById('removeme'); elem.parentNode.removeChild(elem);</script>";

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
echo <<<EOT

<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
<script src="js/dataplg.js"></script>
<script src="js/tagify.js"></script>
<script src="js/select2.js"></script>
<script src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="js/notify.js"></script>
		<script src="js/radio.js"></script>
			<link rel="stylesheet" href="main.css">
			<script> // 	Add Hazards
			String.prototype.includes = function (str) {
			  var returnValue = false;

			  if (this.indexOf(str) !== -1) {
			    returnValue = true;
			  }

			  return returnValue;
			}
						function submitG(e) {

					e.preventDefault();

			// 				Varifiying input
							var form = $('#adding');

						var form_data = form.serializeArray();

							if(form_data[1].value === "" || form_data[2].value === "" ||form_data[3].value === ""||form_data[4].value === ""){
								alert("We Need all Fields Filled Out");
								return false;
							}else{


								 $.ajax({
			        url:'add.php',
			        type:'post',
			        data:$('#adding').serialize(),
			        success:function(data){
			//             alert($('#peerreview'));
			// 					$('#add').toggleClass('is-visible');
								$(".modal-close").click()
								document.getElementById("adding").reset();
								var elements = document.getElementsByTagName('tag')
			while (elements[0]) elements[0].parentNode.removeChild(elements[0])
								$('#adsrc').val([]).trigger('change');
								console.log(data);
			        },
						error: function(XMLHttpRequest, textStatus, errorThrown, responseText) {
			// 				$('#add').toggleClass('is-visible');
							alert('Sorry Something Went Wrong');
							console.log(XMLHttpRequest, textStatus, errorThrown, responseText);
						},

			    });
						 return false;



							}






			// 			if(form_data.length < $("#add tbody tr").length){
			// 				alert("Please Take The Time To Review All Mitigations")
			// 				return false;
			// 			}

			//

				};

				// 	end add hazards

				// // 		Peer Review Submit Via Ajax
					function submitF(e,f) {
					e.preventDefault();
						var form_data = $('#peerreview').serializeArray();
						if(form_data.length < $("#rev tbody tr").length){
							alert("Please Take The Time To Review All Mitigations")
							return false;
						}

			    $.ajax({
			        url:'review.php',
			        type:'post',
			        data:$('#peerreview').serialize(),
			        success:function(data){
			            // alert($('#peerreview').serialize());
								// alert(data);
								$('#rev').toggleClass('is-visible');
			        },
						error: function(XMLHttpRequest, textStatus, errorThrown) {
							console.log(errorThrown);
							$('#rev').toggleClass('is-visible');
						},

			    });
						 return false;

				};
			// 	end peer review ajax

$(document).on('submit','#peerreview',function(){});
// $(document).on('submit','#adding',function(){});
  // window.history.pushState("object or string", "Title", "/"+window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);
				</script>
</head>

<body>
$htmlloaderdiv
</body>

EOT;
?>

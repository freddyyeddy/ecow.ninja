<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require_once('phpmail/PHPMailer.php');
require_once('phpmail/Exception.php');
require_once('phpmail/SMTP.php');
$magic = $_GET['mg'];
$fac = $_GET['f'];

require(includeemail.php);

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';

}

//Notes on the plan from here for implementing magic link style security
// sql query for if older than if older than
// TIMESTAMPDIFF(MINUTE, `Timestamp`, NOW())
// 20160 ---> minutes in 2 weeks

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

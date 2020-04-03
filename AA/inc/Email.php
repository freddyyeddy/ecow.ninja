<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
include("../../inc/var.php");
require_once('phpmail/PHPMailer.php');
require_once('phpmail/Exception.php');
require_once('phpmail/SMTP.php');
require_once('includeemail.php');
$magic = $_GET['mg'];
$fac = $_GET['f'];
// Selecting Email For Message Based of Facility
switch ($fac) {
    case "Master":
        $email = $MasterEmail;
        break;
    case "FS1":
        $email = $FS1Email;
        break;
    case "Test":
        $email = $TestEmail;
        break;

    default:
       echo "Defaulted";
}
// Begin Main Email code
$mail = new PHPMailer;

$mail->isSMTP();
$mail->Mailer = "smtp";                          // Set mailer to use SMTP
$mail->Host = $mailHost;  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = $mailUsername;                 // SMTP username
$mail->Password = $mailPassword;                           // SMTP password
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;                      // Enable encryption, 'ssl' also accepted

$mail->From = $mailFrom;
$mail->FromName = 'Ecow Ninja';
$mail->addAddress($email);     // Add a recipient
// $mail->addAddress('ellen@example.com');               // Name is optional
// $mail->addReplyTo('info@example.com', 'Information');
// $mail->addCC('cc@example.com');
// $mail->addBCC('bcc@example.com');

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);

$mail->Subject = 'AAninja Magic Link';
$mail->Body = $mailbody;

if(!$mail->send()) {
    echo "Message could not be sent to $_GET[f] at $email";
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

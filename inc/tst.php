<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require_once('phpmail/PHPMailer.php');
require_once('phpmail/Exception.php');
require_once('phpmail/SMTP.php');
$magic = $_GET['mg'];
$fac = $_GET['f'];

switch ($fac) {
    case "Master":
        $email = "freddyyeddy@gmail.com";
        break;
    case "FS1":
        $email = "freddyyeddy@gmail.com";
        break;

    default:
       echo "Defaulted";
}

$mail = new PHPMailer;

$mail->isSMTP();
$mail->Mailer = "smtp";                          // Set mailer to use SMTP
$mail->Host = 'mail.ecow.ninja';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'passwords@ecow.ninja';                 // SMTP username
$mail->Password = 'I%=eXdn~y#ug';                           // SMTP password
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;                      // Enable encryption, 'ssl' also accepted

$mail->From = 'passwords@ecow.ninja';
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

$mail->Subject = 'Magic Link';
$mail->Body    = "The New Magic Link is <a href='//localhost/ecow_ninja/inc/tst2.php?mg=$magic&f=$fac'>Magggic....</a>";
// $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

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

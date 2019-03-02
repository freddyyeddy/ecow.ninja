<?php
session_start();
include("var.php");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require_once('phpmail/PHPMailer.php');
require_once('phpmail/Exception.php');
require_once('phpmail/SMTP.php');
//Replacement Magic Link and Session Info
$fac =   isset($_GET['f']) ? $_GET['f']: '';
$magic2 = bin2hex(random_bytes( 72 ));
$magichash2 = password_hash($magic2,PASSWORD_BCRYPT);
$ses2 = md5(uniqid(rand(), true));

// start email reset
function resetthings($m, $mh, $s, $f){

$magic = $m;
$magich = $mh;
$fac = $f;
$ses = $s;
db_query("UPDATE `aas` SET `Magic`= '$magich', `session` = '$ses' WHERE `Facility` = '$fac'");
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
$mail->Body    = "The New Magic Link is <a href='//localhost/Ecow.Ninja/inc/tst2.php?mg=$magic&f=$fac'>Magggic....</a>";
// $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';

}
}

// end send reset email

if(isset($_GET['s']) and isset($_SESSION['ses']) and isset($_GET['f'])){


if($_GET['s'] == $_SESSION['ses']){

echo <<<Back_End_Interface
Here is Where The Back end Interface Will Live
document.head.innerHTML =  will be used at some point to overwrite the html header and implement the backend interface
followed by the Body Overwrite portion too. Will also reference the get.php to get database.
Back_End_Interface;
session_destroy();
}else{

  resetthings($magic2,$magichash2,$ses2,$fac);
  echo "<script>alert('Something Seems Off Sending a New Link');</script>";
}

}else{

}


?>

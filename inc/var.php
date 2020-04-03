<?php
// including external libraries and classes used sitewide

// end External file included

//Reading Super Secret Variables
$privKey = file_get_contents(dirname(__FILE__)."/caltrops.tabi");
$encrypted = file_get_contents(dirname(__FILE__)."/ninja.kunai");
//decrypting variable file with private key and Adding Variables
//openssl_private_decrypt($encrypted, $decrypted, $privKey);
$ninjasecrets = "";
$Split = str_split($encrypted , 684);
ForEach($Split as $Part)
{
  openssl_private_decrypt(base64_decode($Part), $PartialData, $privKey);
  $ninjasecrets.= $PartialData;
}
//var_dump($ninjasecrets);
eval($ninjasecrets);

//Begin Push Bullet Funtion
//This Function Used a Quick and Dirty cURL call to make the push
function pushbullet($title, $msg){

 $data = json_encode(array(
   'type' => 'note',
   'title' => $title,
   'body' => $msg,
   'device_iden' => $pushbulletdeviceid
 ));

 $curl = curl_init();
 curl_setopt($curl, CURLOPT_URL, 'https://api.pushbullet.com/v2/pushes');
 curl_setopt($curl, CURLOPT_USERPWD, $pushbulletkey);
 curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
 curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json', 'Content-Length: ' . strlen($data)]);
 curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
 curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
 curl_setopt($curl, CURLOPT_HEADER, false);
 curl_exec($curl);
 curl_close($curl);

}
//End Push Bullet Function

//Begin SQL Shortcut Funcions
function db_connect() {
global $databasename;
global $databasepassword;
global $databaseusername;
    // Define connection as a static variable, to avoid connecting more than once
    static $connection;

    // Try and connect to the database, if a connection has not been established yet
    if(!isset($connection)) {
    //                mysqli_connect('127.0.0.1',"DataBase Name","Password","Username");
        $connection = @mysqli_connect('localhost', $databaseusername, $databasepassword, $databasename);
        if (!$connection)   $connection = mysqli_connect('127.0.0.1', $databaseusername, $databasepassword, $databasename);
        mysqli_set_charset( $connection, 'utf8');
    }

    // If connection was not successful, handle the error
    if($connection === false) {
        // Handle error - notify administrator, log to a file, show an error screen, etc.
        return mysqli_connect_error();
    }
    return $connection;
}
function db_error() {
    $connection = db_connect();
    return mysqli_error($connection);
}

function db_query($query) {
    // Connect to the database
    $connection = db_connect();

    // Query the database
    $result = mysqli_query($connection,$query);

    return $result;
}

function db_select($query) {
    $rows = array();
    $result = db_query($query);

    // If query failed, return `false`
    if($result === false) {
        return false;
    }

    // If query was successful, retrieve all the rows into an array
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    return $rows;
}
echo $databasename;
$rows = db_query('describe hazmit');
$hzfields = array();
while ( $row = $rows->fetch_assoc() ) {
    $hzfields[] = $row['Field'];
}
$rows = db_query('describe aas');
$aafields = array();
while ( $row = $rows->fetch_assoc() ) {
    $aafields[] = $row['Field'];
}
?>

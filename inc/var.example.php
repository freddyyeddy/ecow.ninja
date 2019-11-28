<?php
// including external libraries and classes used sitewide
require 'PushBullet.class.php';
// end External file included
function db_connect() {

    // Define connection as a static variable, to avoid connecting more than once
    static $connection;

    // Try and connect to the database, if a connection has not been established yet
    if(!isset($connection)) {
    //                mysqli_connect('127.0.0.1',"DataBase Name","Password","Username");
        $connection = mysqli_connect('localhost',"DataBase Name","Password","Username");
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

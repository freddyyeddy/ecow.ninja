<?php
function db_connect() {

    // Define connection as a static variable, to avoid connecting more than once
    static $connection;

    // Try and connect to the database, if a connection has not been established yet
    if(!isset($connection)) {
      // $connection = mysqli_connect('localhost',"ecow","E4jyS54VdU55CT4d","ninja");
        $connection = mysqli_connect('localhost',"lzxksnxr_site","pqt9rI3wo}A*","lzxksnxr_ninjaa");
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

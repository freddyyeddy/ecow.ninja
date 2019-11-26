<?PHP
phpinfo();

$curve_names = openssl_get_curve_names();
print_r($curve_names);
?>

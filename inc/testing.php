<?php
//Reading Super Secret Variables
$privKey = file_get_contents(dirname(__FILE__)."/caltrops.tabi");
$encrypted = file_get_contents(dirname(__FILE__)."/ninja.kunai");
//decrypting variable file with private key and Adding Variables
// openssl_private_decrypt($encrypted, $decrypted, $privKey);
// echo $decrypted;
$ninjasecrets = "";
$Split = str_split($encrypted , 684);
ForEach($Split as $Part)
{
  openssl_private_decrypt(base64_decode($Part), $PartialData, $privKey);
  $ninjasecrets.= $PartialData;
  print_r($PartialData);
}
eval($encrypted);
?>

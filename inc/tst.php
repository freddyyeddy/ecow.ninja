<?PHP
//We Are Going to use two key files
//One Will Be the Public Key Kept In this Directory
//The other Is the site.example.key You will need to re-name this to site.key
//The Public Key is Used To Encrypt One Way
//The Only Way To De-Crypt is with the Private Key Which Is only On the Server
///This Can Be Used To Generate a KeyPair For Private Key Encryption Of Secret Veriables
//Seting Up Variables For Key Type
//$config = array(
//    "digest_alg" => "sha512",
//    "private_key_bits" => 4096,
//    "private_key_type" => OPENSSL_KEYTYPE_RSA,
//);

// Create the private and public key
//$res = openssl_pkey_new($config);

// Extract the private key from $res to $privKey
//openssl_pkey_export($res, $privKey);

// Extract the public key from $res to $pubKey
//$pubKey = openssl_pkey_get_details($res);
//$pubKey = $pubKey['key'];
//
// $data = <<<EOT
// echo "Test echo \n";
// echo 5/12;
// EOT;
// // Encrypt the data to $encrypted using the public key
// openssl_public_encrypt($data, $encrypted, $pubKey);
//
// // Decrypt the data using the private key and store the results in $decrypted
// openssl_private_decrypt($encrypted, $decrypted, $privKey);
// echo "<br><br>";
// print_r($pubKey);
// echo "<br><br>";
// print_r($privKey);
// echo "<br><br>Start Eval Below";
//
// eval($decrypted);

// $data = <<<'EOT'
// echo "Test echo \n";
// echo 5/12;
// EOT;
//This will Make A Key Pair and Put them Into The Files We Want.
//Uncomment Below To generate the Keyfiles

//Name Hidane
//another naem shinobi
//$dir = getcwd();
//Making sure the files exist and can be accessed
//shell_exec('touch $dir/shinobi.scrt && chmod 777 $dir/shinobi.scrt');
//shell_exec('touch $dir/caltrops.tabi && chmod 777 $dir/caltrops.tabi');
//shell_exec('touch $dir/ninja.kunai && chmod 777 $dir/ninja.kunia');
//putting public and private keys into cheekily named files
//Public Key File
//file_put_contents($dir ."/shinobi.scrt",$pubKey);
//Private Key File
//file_put_contents($dir ."/caltrops.tabi",$privKey);

//Reading Files To Verify All Is Working And Writing To Secret Variables File
$pubKey = file_get_contents("shinobi.scrt");
//$privKey = file_get_contents("caltrops.tabi");
//Making Some Data To Encode
//$data ='This is a Test $variables;';
//echo $data . "<br><br>";
//Encrypting the Data
//openssl_public_encrypt($data, $encrypted, $pubKey);
//Puting encrypted Data Into Private variable storage
//file_put_contents(getcwd() ."/ninja.kunai",$encrypted);
//Reading private variable file
$privKey = file_get_contents("caltrops.tabi");
$encrypted = file_get_contents("ninja.kunai");
//decrypting variable file with private key and showing results
openssl_private_decrypt($encrypted, $decrypted, $privKey);
echo "<br><br>Decrypted floogText is:<br> $decrypted"
?>

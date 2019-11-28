<?php
/**
 * GitHub WebHook Handler With Push Bullet Integration
 * From Freddyyeddy For The Peoples
 * The Bulk Web Handler Portion Was Derived From Below Gist By Milo
 * https://gist.github.com/milo/daed6e958ea534e4eba3
 * The Push Bullet Function Came From the below reddit post by Mastermaw
 * https://www.reddit.com/r/PushBullet/comments/453urs/simple_php_pushbullet_note_function/
 * @see  https://developer.github.com/webhooks/
 * @author  Miloslav Hůla (https://github.com/milo)
 */

 //Establishing Functions and Variables
//The branch/s You Want To Pull From On Push
$branch = "Live";
 //Begin Push Bullet Funtion
 //This Function Used a Quick and Dirty cURL call to make the push
 function pushbullet($title, $msg){

	$data = json_encode(array(
		'type' => 'note',
		'title' => $title,
		'body' => $msg,
		'device_iden' => "Device ID To Target (Blank Will Ping All)"
	));

	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, 'https://api.pushbullet.com/v2/pushes');
	curl_setopt($curl, CURLOPT_USERPWD, "Secret API Key Goes Here");
	curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
	curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json', 'Content-Length: ' . strlen($data)]);
	curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($curl, CURLOPT_HEADER, false);
	curl_exec($curl);
	curl_close($curl);

}
//End Push Bullet Function
//Begin Check IP Match Array and Function
//     These Are The Known Github WebHook Ips
//     They are in an array thing CIDR notation
//     You Can Get Them Here under "hooks"
//     https://api.github.com/meta
$knowngithubaddressed =
	[
	[ '192.30.252.0',    22 ],
	[ '185.199.108.0',   22 ],
	[ '140.82.112.0',    20 ],
	];


	function verifyrequestaddress($ip, $addressarray){
		$ip = ip2long($ip);
	foreach( $addressarray as $CIDR )
			{
				//Converting The IP To Long Int
				$Base = ip2long( $CIDR[ 0 ] );
				//Calculating the Subnet Mask Possibilitys
				$Mask = pow( 2, ( 32 - $CIDR[ 1 ] ) ) - 1;
				//Comparing The Subnetrange/IP with Current
				if( $Base === ( $ip & ~$Mask ) )
				{
				return true;
				}
			}
}
//End IP Match Code
$hookSecret = 'Secret Sauce You Can (and Should) Add Normaly a Hash';  # set NULL to disable check
set_error_handler(function($severity, $message, $file, $line) {
	throw new \ErrorException($message, 0, $severity, $file, $line);
});
set_exception_handler(function($e) {
	header('HTTP/1.1 500 Internal Server Error');
	echo "Error on line {$e->getLine()}: " . htmlSpecialChars($e->getMessage());
	die();
});
$rawPost = NULL;
if ($hookSecret !== NULL) {
	if (!isset($_SERVER['HTTP_X_HUB_SIGNATURE'])) {
		throw new \Exception("HTTP header 'X-Hub-Signature' is missing.");
	} elseif (!extension_loaded('hash')) {
		throw new \Exception("Missing 'hash' extension to check the secret code validity.");
	}
	list($algo, $hash) = explode('=', $_SERVER['HTTP_X_HUB_SIGNATURE'], 2) + array('', '');
	if (!in_array($algo, hash_algos(), TRUE)) {
		throw new \Exception("Hash algorithm '$algo' is not supported.");
	}

	$rawPost = file_get_contents('php://input');
	if (!hash_equals($hash , hash_hmac($algo, $rawPost, $hookSecret))) {
		throw new \Exception('Hook secret does not match.');

	}
};

if (!isset($_SERVER['CONTENT_TYPE'])) {
	throw new \Exception("Missing HTTP 'Content-Type' header.");
} elseif (!isset($_SERVER['HTTP_X_GITHUB_EVENT'])) {
	throw new \Exception("Missing HTTP 'X-Github-Event' header.");
}
switch ($_SERVER['CONTENT_TYPE']) {
	case 'application/json':
		$json = $rawPost ?: file_get_contents('php://input');
		break;
	case 'application/x-www-form-urlencoded':
		$json = $_POST['payload'];
		break;
	default:
		throw new \Exception("Unsupported content type: $_SERVER[CONTENT_TYPE]");
}

//Assigning Remote IP To Variable For Checking If its Legit
$Remote = $_SERVER['REMOTE_ADDR'];
if( !array_key_exists( 'REMOTE_ADDR', $_SERVER ) )
			{
				throw new Exception( 'Missing Remote Address' );
			}



if(verifyrequestaddress($Remote, $knowngithubaddressed)){
# Payload structure depends on triggered event
# https://developer.github.com/v3/activity/events/types/
$payload = json_decode($json);
switch (strtolower($_SERVER['HTTP_X_GITHUB_EVENT'])) {
	case 'push':{
		//Is This a Push To a Branch We Care About?
		if($payload->ref === "refs/heads/$branch"){
			//Testing If It Was Made By a Verified User
			switch($payload->pusher->name){
				case 'Username For Someone Allowed To Push To Webserver':{
					//Making a Shell Git To Pull Remote Changes
					$responve = shell_exec("git fetch origin $branch");
					//$responve =    $responve .  shell_exec("git reset --hard HEAD~1");
					//$responve =    $responve .  shell_exec("git pull $branch");
          			$responve =  $responve . shell_exec("git checkout $branch -f");
					//	pushbullet("Git Checkout Results", "$responve");
					//$responve = $responve .  shell_exec("git branch -a");
					//$responve = $responve .  shell_exec('git log --pretty=format: --since="2 days ago"');
					//pushbullet("Git Log", "$responve");
					$responve .=  shell_exec('cd ../ && ls -a');
          print_r($responve);
					break;
				}

				default:{
					print_r('Not Known a User Not Pulling Changes' );
				}


		}




		}


		break;
	}
//	case 'create':
//		break;
	default:
		header('HTTP/1.0 404 Not Found');
		echo "Event:$_SERVER[HTTP_X_GITHUB_EVENT] Payload:\n";
		print_r($payload); # For debug only. Can be found in GitHub hook log.
		die();
}

			}else{
throw new \Exception("Urecognized Server Used: $_SERVER[REMOTE_ADDR] Is Not On The List");}
?>

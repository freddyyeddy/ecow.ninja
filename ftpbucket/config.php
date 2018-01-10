<?php
/*
* @repo_name = ecow.ninja
* @repo_host =  'github'
* @type = 'none'
*
* If you want to copy your files on the server hosting FTPbucket's script, set 'type'=>'none'.
* @ftp_path is relative to the ftp_host. If type is 'none', path is relative to FTPbucket's script location. '../' is usually a good idea.
*
* You can set a specific server for each branch or just change the path.
*
* If you work with multiple servers: FTP credentials are the one of your target server, not the server hosting FTPbucket's script.
*
*/

return array(
    'repos' => array(
        'repo1' => array (
    		'repo_name'=>'ecow.ninja',
    		'repo_host'=>'github',
    		'branches'=>array(
                array(
    				'branch_name'=>'Live',
    				'type'=>'none',
    				'ftp_path'=>'../',
    			),
    		),
        ),
    ),
    // Your BitBucket Credentials
    'bitbucket' => array(
        'username' => '',
        'password' => ''
    ),
    // Your GitHub Credentials
    'github' => array(
        'username' => 'freddyyeddy',
        'password' => '1Tazfone@#'
    ),
    // ADMIN password for FTPBucket's UI
    'admin_pass' => 'CHANGE'
);

?>

<?php
session_start();
include("var.php");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require_once('phpmail/PHPMailer.php');
require_once('phpmail/Exception.php');
require_once('phpmail/SMTP.php');
//Replacement Magic Link and Session Info
sleep(1.5);
$fac =   isset($_GET['f']) ? $_GET['f']: '';
$examplejson = isset($_GET['x']) ? json_decode(stripslashes($_GET['x']),true): '';
// var_dump($examplejson);
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
$mail->Body    = "This link is only good for one user the link is <a href='//localhost/ecow_ninja/inc/tst2.php?mg=$magic&f=$fac'>Magggic....</a>";
// $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
    echo "<script id='removeme'>alert('Something Seems Off Sending a New Link'); var elem = document.getElementById('removeme'); elem.parentNode.removeChild(elem);</script>";
  } else {

}
}

// end send reset email

if(isset($_GET['s']) and isset($_SESSION['ses']) and isset($_GET['f'])){


if($_GET['s'] == $_SESSION['ses']){

  $query102 =  "SELECT * FROM `favorites`";
  // echo $query;
  $rows102 = db_query($query102);
  if($rows102 === false) {
  	 $error = db_error();
  	 // var_dump($error);
  	 // Handle error - inform administrator, log to file, show error page, etc.
  }else{

    $paradigm = <<<Paradigmpermits
    <table id="prardigm" class="ptable" cellspacing="0">
    <thead>
    <tr>
    <th>Link</th>
    <th>Short Description</th>
    <th>Vote and Scores</th>
    </tr>
    </thead>
<tbody>
Paradigmpermits;

    while ( $row = $rows102->fetch_assoc())  {

  	$paradigm .= <<<Table
  <tr id="$row[id]">
    <td class="plink"><a href="$row[link]">Permit Link</a></td>
    <td>$row[description]</td>
    <td class="pscore">
    <span >
      <svg id="svg_$row[id]" class="arrow" viewBox="0 0 152 319">
          <path class="bgarr"   pointer-events="none" "stroke-linecap="round" stroke="#bcdaf3" stroke-width="19%" d="M74 261L27 158 74 56l51 102z"/>
      <a class="vote upvt" id="$row[id]" xlink:href="foo" value="1"> <path fill="#044B94" fill-opacity="0" class="upvt" stroke="none" d="M0 0h152v158H0z"/> </a>
      <a class="vote dwnvt" id="$row[id]" xlink:href="foo" value="-1"><path fill="#044B94" fill-opacity="0" class="dwnvt" stroke="none" d="M0 158h152v160H0z"/> </a>
      <path class="altarr"  stroke-linecap="round" stroke="#184d72" stroke-width="19%" d="M74 261L27 158 74 56l51 102z"/>
      <path class="mnarr"   stroke-linecap="round" stroke="#184d72" stroke-width="19%" d="M74 261L27 158 74 56l51 102z"/>
    </svg>
    </span>
    </td>
  </tr>
Table;
// var_dump($row);
    }
  $paradigm .= <<<Table

</tbody>


Table;



  }



echo <<<Back_End_Interface
<script id="back">
$(document).on('click','.flag',function(e){//do something
    $.ajax({
 url:'validated.php',
 type:'post',
 data: {"id": e.target.id, "flag":e.target.value, "facility" : "$fac"},
 success:function(data, responseText){
   // console.log(data);
   $.notify(e.target.value + " at $fac");
Back_End_Interface;
echo <<<'Back_End_Interface'

   if(e.target.value == "Invalidated"){
     e.target.innerHTML = "Validate";
     e.target.value = "Validated";
   }else{
     if(e.target.value == "Validated"){
     e.target.innerHTML = "Invalidate";
     e.target.value = "Invalidated";
   }
   }
 },
error: function(XMLHttpRequest, textStatus, errorThrown, responseText) {
 alert('Sorry Something Went Wrong');
 console.log(XMLHttpRequest, textStatus, errorThrown, responseText);
},

});
return false;

});

$(document).on('click','.vote',function(e){
  // console.log($(this).attr('value'));
    $.ajax({
 url:'vote.php',
 type:'post',
 data: {"id": this.id, "vote":$(this).attr('value')},
 success:function(data, responseText){
  elm = JSON.parse(data);
   console.log(elm.percentage)
   $.notify("We Just Counted Your Vote");

   $('#' + elm.id ).css("background-size", "100%" + elm.percentage + "%");
   $('#svg_' + elm.id).addClass("bounce-out-bck");
 },
error: function(XMLHttpRequest, textStatus, errorThrown, responseText) {
 alert('Sorry We Had Some Trouble Try Again Soon');
 console.log(XMLHttpRequest, textStatus, errorThrown, responseText);
},

});
return false;

});



$( function() {
  $( "#tabs" ).tabs();
} );

(function($){

    var _old = $.unique;

    $.unique = function(arr){

        // do the default behavior only if we got an array of elements
        if (!!arr[0].nodeType){
            return _old.apply(this,arguments);
        } else {
            // reduce the array to contain no dupes via grep/inArray
            return $.grep(arr,function(v,k){
                return $.inArray(v,arr) === k;
            });
        }
    };
})(jQuery);


// 	function for remaing characters in textarea
	function remaing_char(box,out,max){

    out.html(max + ' characters remaining');

    box.keyup(function() {
        var text_length = box.val().length;
        var text_remaining = max - text_length;

        out.html(text_remaining + ' characters remaining');
    });
// 		$('#haztxt_feedback').html(max + ' characters remaining');

//     $('#haztxt').keyup(function() {
//         var text_length = $('#haztxt').val().length;
//         var text_remaining = max - text_length;

//         $('#haztxt_feedback').html(text_remaining + ' characters remaining');
//     });
	}












		var oTable;



// 		Functions


// 		Copy Text To Clipboard
		function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';


  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}
// 		end Text Copying

// 		Do Stuff

// 		beautify radio buttons
		$(":radio").labelauty({
			minimum_width: "170px",


													});

// 		Making Table  and Filter Drop Downs From Ajax Call

					oTable = $('#table').DataTable({
					initComplete: function () {
						$("#table_filter").detach().appendTo('#search');
						var tgs = new Array();
$.each(oTable.column( 4 ).data().toArray(), function( index, value ) {
var separr = value.split(",");
  tgs = $.merge( tgs, separr );
});
						var crft = new Array();
$.each(oTable.column( 5 ).data().toArray(), function( index, value ) {
var separr = value.split(",");
  crft = $.merge( crft, separr );
});

		var input1 = document.querySelector('input[name=tags]'),
    tagify1 = new Tagify(input1, {
        whitelist : $.unique(tgs).sort(),
        blacklist : ["fuck", "shit"],
			delimiters          : ", ",
    });
		var input2 = document.querySelector('input[name=crafts]'),
    tagify2 = new Tagify(input2, {
        whitelist : $.unique(crft).sort(),
        blacklist : ["fuck", "shit"],
			  delimiters          : ", ",
    });

					for(var i=0; i< tgs.length;i++)
{
//creates option tag
  jQuery('<option/>', {
        value: tgs[i],
        html: tgs[i]
        }).appendTo('#tagsadd'); //appends to select if parent div has id dropdown
}

        },

        paging:   false,
        info:     false,


						 ajax: {
        url: "get.php",
        dataSrc: '',
							 type: "POST",
    },

      columns: [
            { "data": "source" },
            { "data": "hazard" },
            { "data": "mitigation" },
 						{ "data": "id" },
            { "data": "tags" },
            { "data": "crafts" },
            { "data": "review" },
            { "data": "bad" },
            { "data": "facilitys" },
        ],
					"columnDefs": [
            {
                "targets": [ 4,5,6,7 ],
                "visible": false,
// 							'searchable'    : false,


            },
            {
                "targets": [ 8 ],
                "visible": false,


            },
            {
            "targets": 3,
            // "data": null,
            "title": "Validated",
            'searchable'    : false,
            render: function ( data, type, row ) {
Back_End_Interface;
echo <<<Back_End_Interface
// console.log(data123 = row['facilitys']);
data123 = row['facilitys']
if (data123) {


              if (data123.includes("$fac")) {
Back_End_Interface;
echo <<<'Back_End_Interface'
                    return '<button id="' + data + '" class="flag" value="Invalidated">Invalidate</button><br><button id="' + data + '" class="flag" value="Review">Reassessment</button>';
                    }
                  else {
                    return '<button id="' + data + '" class="flag" value="Validated">Validate</button><br>  <button id="' + data + '" class="flag" value="Review">Reassessment</button>';
                    }

        }else {
            return '<button id="' + data + '" class="flag" value="Validated">Validate</button> <br>  <button id="' + data + '" class="flag" value="Review">Reassessment</button>';
          }
      }

}
        ],
						language: {
        search: "_INPUT_",
        searchPlaceholder: "Search...",
							zeroRecords: "Looks Like There Are No Hazards Like What Your Looking For Add a Hazard <button id='addhaz' type='button'>Add hazards</button>"

    },
						bInfo: false,




    });

// 		Making Filters and Searches For Table

		yadcf.init(oTable, [

// 			{column_number : 1},
// 			{column_number : 2},
// 			{column_number : 3},
			{
            column_number : 4,
    				filter_container_id: 'Tags',
					filter_type: "multi_select",
				text_data_delimiter: ",",
				case_insensitive: "true",
        filter_default_label: "Tags",
				select_type: "select2",
				filter_reset_button_text: false,
										dropdownAutoWidth: false,
						width: 'resolve',

				},
			{
            column_number : 5,
    				filter_container_id: 'Craft',
            filter_default_label: "Crafts",
				text_data_delimiter: ",",
				case_insensitive: "true",
					filter_type: "multi_select",
				select_type: "select2",
				filter_reset_button_text: false,
										dropdownAutoWidth: false,
						width: 'resolve',

				},
        {
              column_number : 8,
      				filter_container_id: 'facflag',
              filter_default_label: "Facilitys",
  				text_data_delimiter: ",",
  				case_insensitive: "true",
  					filter_type: "multi_select",
  				select_type: "select2",
  				filter_reset_button_text: false,
  										dropdownAutoWidth: false,
  						width: 'resolve',

  				},
		]
							);
// End Get Table and Generate Filters




// 		Copy Text To Clipboard when Clicked and Alert with a popup

			 $(document).on('click', '#table tbody td:not(:first-child, :last-child)',function(){
				 var $this = $(this);
				     var selectedCellIndex = this.cellIndex;
    var correspondingHeader = $("table thead tr th")[selectedCellIndex];
    var $th = $(correspondingHeader).text();
				 $this.addClass('highlighted');
    // set a timeout that will revert back class after 5 seconds:
    window.setTimeout(function() {
        $this.removeClass('highlighted');
    }, 1000);
			copyTextToClipboard($this.html());
   $.notify("Copied The "+ $th);


});
		//       Highlights clicked row
      $('#table').on('click', 'tbody tr', function(event) {
        var ths = $(this);
    $(this).addClass('highlight').siblings().removeClass('highlight');
        setTimeout(function() {
       ths.removeClass('highlight', 2000, 'linear');
   }, 2222);
});
Back_End_Interface;

		$query2 = "SELECT * FROM `hazmit` WHERE `review` < 2  ORDER BY RAND() LIMIT 3";
	$rows2 = db_select($query2);
if($rows2 === false) {
    $error = db_error();

    // Handle error - inform administrator, log to file, show error page, etc.
}

if(!empty($rows2)){
	// 		Inject Modal JS
		echo <<<Poop
				$('#rev').toggleClass('is-visible');

Poop;
// 		End Modal JS
}else{
	$nomodal = 1;
}

echo <<<Back_End_Interface


				$(document).on('click',"#addhaz", function(){
// 					console.log('clicked');
			$('.modal').toggleClass('is-visible');

		});
						$(document).on('click',".modal-close", function(){
			$('.modal').toggleClass('is-visible');

		});
    $(document).on('click',".modal-close2", function(){
$('.modal2').toggleClass('is-visible');

});
		document.getElementById("table").deleteTFoot();



		$('.nrgsrc').select2({
			placeholder: 'Select an Energy Source',
		  minimumResultsForSearch: -1,
			dropdownAutoWidth : true,
			width: "resolve",




		});
		remaing_char($('#haztxt'),$('#haztxt_feedback'),500);
		remaing_char($('#mittxt'),$('#mittxt_feedback'),395);



    $( function() {
      $( "#accordion" ).accordion();
    } );

</script>
<div id="tabs">
  <ul>
    <li><a href="#tabs-2">Haz/Con Database</a></li>
    <li><a href="#tabs-1">Permit Paradigm</a></li>


  </ul>

  <div id="tabs-2">
  <svg display="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="768" height="800" viewBox="0 0 768 800"><defs><g id="icon-close"><path class="path1" d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path></g></defs></svg>



<div class="wrapper">
<div class="grid" style="margin-left: 1em;">


<div class="col-1-3" style="width: 32%;" id="facflag"></div>
<div class="col-1-3" style="width: 32%;" id="Craft"></div>
<div class="col-1-3" style="width: 32%;" id="Tags"></div>
</div>

<div class="searchbox sbx-custom">


<div id="search">
</div>
</div>
<table id="table" class="stripe">
  <thead>
    <tr>
      <th style="min-width: 8em;">Source</th>
      <th>Hazard</th>
      <th>Mitigation</th>

      <th>id</th>
      <th>tags</th>
      <th>crafts</th>
      <th>review</th>
      <th>bad</th>
    </tr>
  </thead>
   <tfoot>
          <tr>
      <th>Source</th>
            <th>Hazard</th>
      <th>Mitigation</th>

            <th>id</th>
      <th>tags</th>
      <th>crafts</th>
      <th>review</th>
      <th>bad</th>
          </tr>
      </tfoot>
  <tbody>
  </tbody>
</table>
</div>
Back_End_Interface;
if(!isset($nomodal)){

// 	$reviewtbl =  var_dump($rows);
// 	generating table for peer review

$reviewtbl = "<form  id='peerreview'><table border=1 frame=void rules=rows  style='text-align: center;'><thead><tr><th width='10%'>Source</th><th>Mitigation</th><th>Hazard</th><th style='min-width: 183px;'>Good or Bad?</th></tr></thead><tbody id='rev'>";

foreach ($rows2 as $row){
$reviewtbl .= "<tr><td>" . $row['source'] . "</td><td>" . STRIPSLASHES($row['hazard']) . "</td><td>" . STRIPSLASHES($row['mitigation']) . "</td><td     style='text-align: left;'><input class='radio' type='radio' name='" . $row['id'] . "' value='true' data-labelauty='Good Hazard'/><input class='radio' type='radio' name='" . $row['id'] . "' value='false' data-labelauty='This is a Poor Hazard'/></td></tr>";

}

$reviewtbl .= "</tbody></table></form>";
// 	end table generating

// 	Inject Modal HTML
// 	Modal x button
// 	         <button class="modal-close modal-toggle"><svg class="icon-close icon" viewBox="0 0 32 32"><use xlink:href="#icon-close"></use></svg></button>

echo <<<Modalpoo
  <div id="rev" class="modal2">
  <div class="modal2-overlay modal2-toggle"></div>
  <div class="modal2-wrapper modal2-transition">
    <div class="modal2-header">
      <h2 class="modal2-heading">Peer Review <button class="modal-close2 modal-toggle"><svg class="icon-close icon" viewBox="0 0 32 32"><use xlink:href="#icon-close"></use></svg></button></h2>

    </div>

    <div class="modal2-body">
      <div class="modal2-content">
        <p>
        To add a hazard and controll pair to the system it has to be peer reviewed after submital. This means at least two other people have to think that the hazard and controll are good

        </p>
        $reviewtbl
      </div>
      <div align="center">
      <input class='button myButton' type='submit' value='Submit' onclick='submitF(event);' id='submit'  name='submit'>
      </div>
    </div>
  </div>
</div>
Modalpoo;
// 	End Modal HTML Inject
}

echo <<<Back_End_Interface
<!-- 	add hazards modal -->

<div id="add" class="modal">
  <div class="modal-overlay"></div>

  <div class="modal-wrapper modal-transition">
    <div class="modal-header">
                 <button class="modal-close modal-toggle"><svg class="icon-close icon" viewBox="0 0 32 32"><use xlink:href="#icon-close"></use></svg></button>

      <h2 class="modal-heading">Add Hazards and Mitigations</h2>
    </div>

    <div class="modal-body">
      <div class="modal-content">
        <p>
        Remeber To make sure who what and how

        </p>
        <form id="adding">

              <div class="icoselect">
                <select name="source" id="adsrc" class='nrgsrc' style="width:100%;">
<option  value="Pressure &#xe801;">Pressure &#xe801;</option>
<option value="Mechanical &#xe800;">Mechanical &#xe800;</option>
<option value="Body Mechanics &#xe80d;">Body Mechanics &#xe80d;</option>
<option value="Toxic Substances &#xe807;">Toxic Substances &#xe807;</option>
<option value="Thermal &#xe803;">Thermal &#xe803;</option>
<option value="Hazardus Prossess Materials &#xe806;">Hazardus Prossess Materials &#xe806;</option>
<option value="SIMOPS &#xE804;">SIMOPS &#xE804;</option>
<option value="Weather &#xE805;">Weather &#xE805;</option>
<option value="Noise &#xe808;">Noise &#xe808;</option>
<option  value="Human Factor &#xe809;">Human Factor &#xe809;</option>
<option  value="Gravity &#xe80c;">Gravity &#xe80c;</option>
<option  value="Radiation  &#xe802;">Radiation  &#xe802;</option>
<option value="Biological &#xE80A;">Biological &#xE80A;</option>
<option value="Electrical &#59403;">Electrical &#59403;</option>
<!--   <option value="HF">Human Factor</option> -->

</select>
              </div>
              <div><textarea required rows="7" name="hazard" style="width:100%" placeholder="What Is The Hazard and How Can It Hurt You (other than your feelings)" id="haztxt" maxlength="500"></textarea><div id="haztxt_feedback"></div></div>
              <div><textarea required rows="7" name="mitigation" style="width:100%" placeholder="Who Will Be Accountable For Mitigations and how Will they Act on them" id="mittxt"  cols="30" maxlength="395"></textarea><div id="mittxt_feedback"></div></div>
              <div><input id="tgs" required name='tags' placeholder='Write tags eg: ladder, gas, excavation ect.'></div>
              <div><input id="crft" required name='crafts' placeholder='What Crafts Are This Aplicable to?' ></div>


        </form>
      </div>
      <div align="center">
<!-- 					onclick='submitF(event);' -->
      <input class='button myButton' type='submit' value='Submit' onclick='submitG(event);' id='submithaz'  name='submit'>
      </div>
    </div>
  </div>
</div>

<!-- 	end hazards modal -->


Back_End_Interface;

echo <<<Back_End_Interface
  </div>
  <div id="tabs-1">
  <span><h2><i>Paradigm</i><h4><div style="padding-left: 3em; margin-top: -1.5em;" >an outstandingly clear or typical example or archetype.</div></h4></h2>
  <br>

  <br>
  This is how we will find good. Any AA can Add to the list and vote on any other paradigms. The top 5 paradigms are visable on ecow.ninja for all who use it to see what good.  Change is inevitable and due to the nature of that change the paradigm list will reset each month. and the Same Paradigm sugjstions cannot be re-used again.

$paradigm


  </div>

</div>
Back_End_Interface;
session_destroy();
}else{
echo "fail";
  resetthings($magic2,$magichash2,$ses2,$fac);
  echo "<script id='removeme1'>alert('Something Seems Off Sending a New Link'); localStorage.setItem('session', '$ses2'); var elem = document.getElementById('removeme1'); elem.parentNode.removeChild(elem);</script>";
session_destroy();
}

}else{
echo "fail not get";
}


?>

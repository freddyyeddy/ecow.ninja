<?php
require("inc/var.php");
?>
<head>
	<title>Ninja!!</title>
<!-- Hidden asdTest asdfdsfsadasdadsf 	<link rel="stylesheet" type="text/css" href="main.css"> -->
	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
	<link rel="stylesheet" href="inc/main.css">
	<script src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
	<script src="inc/js/dataplg.js"></script>
	<script src="inc/js/tagify.js"></script>
<script src="inc/js/select2.js"></script>
	<script src="inc/js/notify.js"></script>
	  	<script src="inc/js/radio.js"></script>
</head>
<script>
	
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
	
	
	
	
	
	// // 		Peer Review Submit Via Ajax
		function submitF(e) {
		e.preventDefault();
			var form_data = $('#peerreview').serializeArray();
			if(form_data.length < $("#rev tbody tr").length){
				alert("Please Take The Time To Review All Mitigations")
				return false;
			}
   
    $.ajax({
        url:'inc/review.php',
        type:'post',
        data:$('#peerreview').serialize(),
        success:function(){
//             alert($('#peerreview').serialize());
					$('#rev').toggleClass('is-visible');
        },
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				$('#rev').toggleClass('is-visible');
			},
			
    });
			 return false;
	
	};
// 	end peer review ajax
// 	Add Hazards 

			function submitG(e) {

		e.preventDefault();
				
// 				Varifiying input
				var form = $('#adding');

			var form_data = form.serializeArray();
				
				if(form_data[1].value === "" || form_data[2].value === "" ||form_data[3].value === ""||form_data[4].value === ""){
					alert("We Need all Fields Filled Out"); 
					return false;
				}else{
					
					
					 $.ajax({
        url:'inc/add.php',
        type:'post',
        data:$('#adding').serialize(),
        success:function(data){
//             alert($('#peerreview').serialize());
					$('#add').toggleClass('is-visible');
// 					console.log(data);
        },
			error: function(XMLHttpRequest, textStatus, errorThrown) {
// 				$('#add').toggleClass('is-visible');
				alert('Sorry Something Went Wrong');
			},
			
    });
			 return false;
					
					
					
				}

				

				// 				if(! $myForm[0].checkValidity()) {
//   // If the form is invalid, submit it. The form won't actually submit;
//   // this will just cause the browser to display the native HTML5 error messages.
//   $myForm.find(':submit').click();
// }
				
				
// 			if(form_data.length < $("#add tbody tr").length){
// 				alert("Please Take The Time To Review All Mitigations")
// 				return false;
// 			}
   
//    
	
	};
	
	// 	end add hazards
	
	
	
	
	
		var oTable;
	
  $(document).ready(function() {

					// 		Variables

	
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
var separr = value.split(', ');
  tgs = $.merge( tgs, separr );
});
						var crft = new Array();
$.each(oTable.column( 5 ).data().toArray(), function( index, value ) {
var separr = value.split(', ');
  crft = $.merge( crft, separr );
});
					
						
		var input1 = document.querySelector('input[name=tags]'),
    tagify1 = new Tagify(input1, {
        whitelist : $.unique(tgs).sort(),
        blacklist : ["fuck", "shit"],
			delimiters          : ", ",
    })
		var input2 = document.querySelector('input[name=crafts]'),
    tagify1 = new Tagify(input2, {
        whitelist : $.unique(crft).sort(),
        blacklist : ["fuck", "shit"],
			  delimiters          : ", ",
    })

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
        url: "inc/get.php",
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
        ],
					"columnDefs": [
            {
                "targets": [ 4,5 ],
                "visible": false,
// 							'searchable'    : false, 
                    
                
            },
            {
                "targets": [ 3,6,7 ],
                "visible": false,
													'searchable'    : false, 

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
        {
            column_number : 0,
    				filter_container_id: 'Source',
            filter_default_label: "Energy Source",
					select_type: "select2",
					filter_type: "select",
					filter_reset_button_text: false,
					select_type_options: {
						minimumResultsForSearch: -1,
						placeholder: "Energy Sources",
						allowClear: true,
						dropdownAutoWidth: false,
						width: 'resolve',

					}
				},  
// 			{column_number : 1},      
// 			{column_number : 2},      
// 			{column_number : 3},      
			{
            column_number : 4,
    				filter_container_id: 'Tags',
					filter_type: "multi_select",
				text_data_delimiter: ", ",
				case_insensitive: "true",
        filter_default_label: "Select any Tags",
				select_type: "select2",
				filter_reset_button_text: false,
										dropdownAutoWidth: false,
						width: 'resolve',

				},     
			{
            column_number : 5,
    				filter_container_id: 'Craft',
            filter_default_label: "Select Craft or Crafts",
				text_data_delimiter: ", ",
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
		
			 $(document).on('click', '#table tbody td:not(:first-child)',function(){
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
   }, 800);
});
		<?php
		$query = "SELECT * FROM `hazmit` WHERE `review` < 2 and `bad` <= 2 and `bad` > 0  ORDER BY RAND() LIMIT 3";
	$rows = db_select($query);
if($rows === false) {
    $error = db_error();
	
    // Handle error - inform administrator, log to file, show error page, etc.
}

if(!empty($rows)){
	// 		Inject Modal JS
		echo <<<Poop
				$('#rev').toggleClass('is-visible');

Poop;
// 		End Modal JS
}else{
	$nomodal = 1;
}


					
		
		
		?>
				$(document).on('click',"#addhaz", function(){
// 					console.log('clicked');
			$('#add').toggleClass('is-visible');
					
		});
						$(document).on('click',".modal-close", function(){
			$('#add').toggleClass('is-visible');
					
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
	
		
	
});

</script>
<body>
	  <svg display="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="768" height="800" viewBox="0 0 768 800"><defs><g id="icon-close"><path class="path1" d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path></g></defs></svg>

	
	<div class="wrapper">
	<div class="grid">
	<div class="col-1-3" style="font-family: icons-hazards;" id="Source"></div>
	<div class="col-1-3" id="Craft"></div>
	<div class="col-1-3" id="Tags"></div>
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
	<?php
	if(!isset($nomodal)){
	
// 	$reviewtbl =  var_dump($rows);
	// 	generating table for peer review
	
$reviewtbl = "<table border=1 frame=void rules=rows  style='text-align: center;'><thead><tr><th width='10%'>Source</th><th>Mitigation</th><th>Hazard</th><th style='min-width: 183px;'>Good or Bad?</th></tr></thead><tbody id='rev'> <form id='peerreview'>";

foreach ($rows as $row){
	$reviewtbl .= "<tr><td>" . $row['source'] . "</td><td>" . $row['hazard'] . "</td><td>" . $row['mitigation'] . "</td><td     style='text-align: left;'><input class='radio' type='radio' name='" . $row['id'] . "' value='true' data-labelauty='Good Hazard'/><input class='radio' type='radio' name='" . $row['id'] . "' value='false' data-labelauty='This is a Poor Hazard'/></td></tr>";
		
}
	
	$reviewtbl .= "</form></tbody></table>";
// 	end table generating
	
// 	Inject Modal HTML
// 	Modal x button
// 	         <button class="modal-close modal-toggle"><svg class="icon-close icon" viewBox="0 0 32 32"><use xlink:href="#icon-close"></use></svg></button>

	echo <<<Modalpoo
		<div id="rev" class="modal">
    <div class="modal-overlay modal-toggle"></div>
    <div class="modal-wrapper modal-transition">
      <div class="modal-header">
        <h2 class="modal-heading">Peer Review Required</h2>
      </div>
      
      <div class="modal-body">
        <div class="modal-content">
          <p>
					To Use This Tool You Are Required To Participare in The Peer Review Prossess. Please Select good or poor for each hazard then submit.
					
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
	?>
	
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
									<select name="source" class='nrgsrc' style="width:100%;">
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
								<div><input required name='tags' placeholder='Write tags eg: ladder, gas, excavation ect.'></div>
								<div><input required name='crafts' placeholder='What Crafts Are This Aplicable to?' ></td></dib>
							

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
	
	
	</body>

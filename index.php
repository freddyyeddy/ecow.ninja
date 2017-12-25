<?php
require("inc/var.php");
?>
<head>
<!--   	<link rel="stylesheet" type="text/css" href="main.css"> -->
	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
	<link rel="stylesheet" href="inc/main.css">
	<script src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
	<script src="inc/js/dataplg.js"></script>
	<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
<script src="inc/js/select2.js"></script>
	<script src="inc/js/notify.js"></script>
	  	<script src="inc/js/radio.js"></script>
</head>
<script>
	// // 		Peer Review Submit Via Ajax
		function submitF(e) {
		e.preventDefault();
			var form_data = $('#peerreview').serializeArray();
			if(form_data.length < $("#rev tr").length){
				alert("Please Take The Time To Review All Mitigations")
				return false;
			}

    $.ajax({
        url:'inc/review.php',
        type:'post',
        data:$('#peerreview').serialize(),
        success:function(){
//             alert($('#peerreview').serialize());
					$('.modal').toggleClass('is-visible');
        },
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				$('.modal').toggleClass('is-visible');
			},

    });
			 return false;

	};
  $(document).ready(function() {

					// 		Variables

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

        },

        paging:   false,
        info:     false,


						 ajax: {
        url: "inc/get.php",
        dataSrc: ''
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
        searchPlaceholder: "Search..."
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

			 $(document).on('click', '#table tbody td:gt(1)',function(){
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
				$('.modal').toggleClass('is-visible');

Poop;
// 		End Modal JS
}




		?>
		document.getElementById("table").deleteTFoot();

});

</script>
<body>
<!-- 	  <svg display="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="768" height="800" viewBox="0 0 768 800"><defs><g id="icon-close"><path class="path1" d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path></g></defs></svg> -->


	<div class="wrapper">
	<div class="grid">
	<div class="col-1-3" id="Source"></div>
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
				<th>Source</th>
				<th>Mitigation</th>
				<th>Hazard</th>
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
				<th>Mitigation</th>
				<th>Hazard</th>
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
		<div class="modal">
    <div class="modal-overlay"></div>
    <div class="modal-wrapper modal-transition">
      <div class="modal-header">
        <h2 class="modal-heading">Peer Review Required</h2>
      </div>

      <div class="modal-body">
        <div class="modal-content">
          <p>
					To Use This Too You Are Required To Participare in The Peer Review Prossess. Please Choose Good or Bad for each hazard in the tabe then click submit

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
	?>
	</body>

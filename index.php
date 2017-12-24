<head>
<!--   	<link rel="stylesheet" type="text/css" href="main.css"> -->
	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
	<link rel="stylesheet" href="inc/main.css">
	<script src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
	<script src="inc/js/dataplg.js"></script>
	<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
<script src="inc/js/select2.js"></script>
	<script src="inc/js/notify.js"></script>
</head>
<script>
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
            { "data": "crafts" }
        ],
					"columnDefs": [
            {
                "targets": [ 3,4,5 ],
                "visible": false,
// 							'searchable'    : false, 
                    
                
            }
//             {
//                 "targets": [ 3 ],
//                 "visible": false
//             }
						
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
		
			 $(document).on('click', 'tbody td',function(){
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
		
		document.getElementById("table").deleteTFoot();
});

</script>

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
            </tr>
        </tfoot>
		<tbody>
		</tbody>
	</table>
</div>
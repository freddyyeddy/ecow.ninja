<head>	
<link rel="stylesheet" href="main.css">
  	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>

  	<script src="js/radio.js"></script>
<script>
  $(document).ready(function(){
	$(":radio").labelauty();
});
  </script>
</head>


<form>
  
  <input type="radio" name="goodbad"  data-labelauty="Good Hazard"/>
			<input type="radio" name="goodbad" data-labelauty="This is a Poor Hazard"/>
</form>
<?PHP

echo phpinfo();

?>

<script>
$(document).on('click','#btnPrepend',function(e){//do something
    $.ajax({
 url:'inc/review.php',
 type:'post',
 data: {"id": e.target.id, "unflag":e.target.value},
 success:function(data){
$.notify("Flagged/Unflaged " + data);
 },
error: function(XMLHttpRequest, textStatus, errorThrown, responseText) {
 alert('Sorry Something Went Wrong');
 console.log(XMLHttpRequest, textStatus, errorThrown, responseText);
},

});
return false;






};





};


<script>
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Action to be performed when the document is read;
         // xhttp.responseXML
         alert("sucsess");
      }
  };
  var magic = "mg= &";
  var session = "s= &";
  var fac = "f= ";

  xhttp.open("GET", "tst3.php"+"?mg"+magic+session+fac, true);
  xhttp.send();
  </script>

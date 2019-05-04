<head>	
<link rel="stylesheet" href="main.css">
  	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>

  	<script src="js/radio.js"></script>
<script>
var data = "{\"isDeleted\":\"false\",\"sites\":[],\"textProperties\":{},\"kind\":\"Permit\",\"states\":[\"Requesting\",\"Approved\",\"ReadyToVerify\",\"Verified\",\"Authorised\",\"Issued\",\"Active\",\"Closing\",\"InReview\",\"SuspendedForEmergency\",\"SuspendedForReauthorization\",\"SuspendedForRevalidation\",\"AwaitingActivation\",\"Revalidate\",\"Expired\",\"SuspendedForSanctionToTest\",\"ReAuthorized\",\"ReIssued\",\"nonClosed\"],\"language\":\"en\",\"take\":2147483647,\"columns\":[{\"name\":\"workItemImage\"},{\"name\":\"registrationNumber\"},{\"name\":\"title\"},{\"name\":\"location\"},{\"name\":\"plannedStartDateTime\"},{\"name\":\"workOrderDisplay\"},{\"name\":\"shutdownProjectName\"}]}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://ecowalaska.bpweb.bp.com/api/search/certificates");
xhr.setRequestHeader("accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
xhr.setRequestHeader("origin", "https://ecowalaska.bpweb.bp.com");
xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("dnt", "1");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "0ba28cde-5e57-8bcc-60fb-d0d57a293b6c");

xhr.send(data);

  </script>
</head>

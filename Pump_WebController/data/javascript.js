   function toggleCheckbox(x) {
       var xhr = new XMLHttpRequest();
       xhr.open("GET", "/" + x, true);
       xhr.send();
   };

   setInterval(function() {
       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
               document.getElementById("pump1runtime").innerHTML = this.responseText;
           }
       };
       xhttp.open("GET", "/pump1runtime", true);
       xhttp.send();
   }, 100);

   function openPage(pageName) {
       var i, tabcontent, tablinks;
       tabcontent = document.getElementsByClassName("tabcontent");
       for (i = 0; i < tabcontent.length; i++) {
           tabcontent[i].style.display = "none";
       }
       tablinks = document.getElementsByClassName("tablink");
       for (i = 0; i < tablinks.length; i++) {
           tablinks[i].style.backgroundColor = "";
       }
       document.getElementById(pageName).style.display = "block";
       elmnt.style.backgroundColor = color;
   };




   if (!!window.EventSource) {
       var source = new EventSource('/events');

       source.addEventListener('open', function(e) {
           console.log("Events Connected");
       }, false);
       source.addEventListener('error', function(e) {
           if (e.target.readyState != EventSource.OPEN) {
               console.log("Events Disconnected");
           }
       }, false);

       source.addEventListener('message', function(e) {
           console.log("message", e.data);
       }, false);

       source.addEventListener('currentTime', function(e) {
           milliseconds = e.data * 1000 // 1575909015000
           dateObject = new Date(milliseconds)
           document.getElementById("currentDatetime").innerHTML = dateObject.toLocaleString("en-US", { timeZoneName: "short" }) // 12/9/2019, 10:30:15 AM CST
       }, false);

          source.addEventListener('pump1nextDatetime', function(e) {
           milliseconds = e.data * 1000 // 1575909015000
           dateObject = new Date(milliseconds)
           document.getElementById("pump1nextDatetime").innerHTML = "Pump 1 next active: " + dateObject.toLocaleString("en-US", { timeZoneName: "short" }) // 12/9/2019, 10:30:15 AM CST
       }, false);

   }


   // Get the element with id="defaultOpen" and click on it
   document.getElementById("defaultOpen").click();


   function submitSettingMessage() {
       alert("Saved Setting");
       window.location.reload();
   };

   function submitProgramMessage() {
       alert("Saved Program");
       window.location.reload();
   };
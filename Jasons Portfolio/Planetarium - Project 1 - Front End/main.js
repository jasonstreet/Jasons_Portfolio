// --THE FOLLOWING CODE IS ONLY FOR APOD - ASTRONOMY PICTURE OF THE DAY -- //


// My Global Variables

var currentAPOD; // Astronomy Picture of the day - current day
var myData; // All data requested by API


// My Event listeners

var getAPOD = document.getElementById("showAPOD").addEventListener("click", loadMyData, false);


// End of event listeners


function loadMyData() {

    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://api.nasa.gov/planetary/apod?api_key=h27SgJssM7Qh0G0xPFPBky4D8HFyfsL0yy9KSsBq", true);
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            console.log(myData); // - Test if the API is properly linked.  
            
            
            document.getElementById("currentAPOD").innerHTML = '<img" src="' + myData.url.img + '"width="auto" height="auto" alt="Image of the day">'; 
        }
        
    }
    myRequest.send();
}








// --END OF APOD-- //








/*// ----------------------------------------------------------------------- //










// --THE FOLLOWING CODE IS ONLY FOR NEOWS - NEAR EARTH OBJECT WEB SERVICE -- //


// My Global Variables


var neows; // Near earth object web service

// My Event listeners


var getNEOWS = document.getElementById("currentNEOWS").addEventListener("click", loadMyData, false);


// --END OF NEOWS-- //






// ----------------------------------------------------------------------- //















// --THE FOLLOWING CODE IS ONLY FOR MARS ROVER  -- //







// --END OF MARS ROVER-- //*/
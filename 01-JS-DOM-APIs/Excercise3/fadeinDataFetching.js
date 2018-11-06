$(document).ready(function () {
    $(".hidden-section").fadeIn(3000); // do not pay attention to this. It is from a previous excercise. 
 });

function loadJoke() { //this function will be executed when we click on the button. (calling the event onClick)
    var xmlhttp = new XMLHttpRequest(); // creates an XMLHttpRequest object
    xmlhttp.onreadystatechange = function() { //The onreadystatechange property specifies a function to be executed every time the status of the XMLHttpRequest object changes
        if (this.readyState == 4 && this.status == 200) { //When readyState property is 4 and the status property is 200, the response is ready
            var myObj = JSON.parse(this.responseText); // IMPORTANT: since it is written in JSON, we must parse it to javascript object. The responseText property returns the server response as a text string.
            console.log(myObj);
            document.getElementById("msg").innerHTML = myObj.value.joke; // we change the text from the <p> element to the value "joke" inside the parsed object from the API
        }
    };

    //To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:
    
    xmlhttp.open("GET", "http://api.icndb.com/jokes/random", true); //Specifies the type of request method: the type of request: GET or POST url: the server (file) location async: true (asynchronous) or false (synchronous)
    xmlhttp.send(); //Sends the request to the server (used for GET)
}
$(document).ready(function () {
    $(".hidden-section").fadeIn(3000); // do not pay attention to this. It is from a previous excercise. 
 });




/*var newPromise = myfunc("GET", "http://api.icndb.com/jokes/random", true);*/
/* var newPromise2 = myfunc("GET", "api.spotify.com", true); */


 newPromise = myfunc("GET", "http://api.icndb.com/jokes/random", true);


function myfunc( method, url, sync ) {
    
    var promise = new Promise(function(resolve, reject){

        var xmlhttp = new XMLHttpRequest(); // creates an XMLHttpRequest object
        xmlhttp.onreadystatechange = function() { //The onreadystatechange property specifies a function to be executed every time the status of the XMLHttpRequest object changes
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseText) 
            }
            else {
                reject("error");
            }
        };
        xmlhttp.open(method, url, sync)
    });
    return promise;
} 

    newPromise.then(function(response){ 
        var myObj = JSON.parse(this.responseText); 
        document.getElementById("msg").innerHTML = myObj.value.joke;
    }).catch(function(error){
        console.log(error);
        document.getElementById("msg").style.color = "red";
    })
    
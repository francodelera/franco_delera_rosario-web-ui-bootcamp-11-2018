$(document).ready(function () {
    $(".hidden-section").fadeIn(1000); // do not pay attention to this. It is from a previous excercise. 
 });


function myfunc( method, url, sync ) {
    
    var promise = new Promise(function(resolve, reject){
        var xmlhttp = new XMLHttpRequest(); 
        xmlhttp.open(method, url, sync);
        xmlhttp.onreadystatechange = function() { 
           
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                resolve(this.response); 
            }
            else if (xmlhttp.readyState === 4 && xmlhttp.status >= 399){
                reject(error);
            }
            
        };
        xmlhttp.send();
    });
    return promise;
} 

function getJoke() {
    newPromise = myfunc("GET", "http://api.icndb.com/jokes/random", true);

    newPromise.then(function(response){ 
        var myObj = JSON.parse(response); 
        document.getElementById("msg").innerHTML = myObj.value.joke;
    }).catch(function(error){
        console.log(error);
        document.getElementById("msg").innerHTML = "Something went wrong";
        document.getElementById("msg").style.color = "red";
        document.querySelector(".hidden-section").style.border = "4px double red";
    })
}
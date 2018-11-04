

function getRepos() { 
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) {  
            var myObj = JSON.parse(this.responseText); 
            console.log(myObj);
            test= document.createElement('section'); //creates the section element in the HTML
            test.setAttribute('id','test'); //sets an id called test to that section element
            var ul= document.createElement('ul'); //creates an ul element
            document.body.appendChild(test); //append test as a child of the body element
            test.appendChild(ul); // append the created ul element as a child of the section element
            for(i=0; i < myObj.items.length; i++){
            var li= document.createElement('li');
            ul.appendChild(li);
            li.innerHTML= li.innerHTML + "Repo Name: "+ myObj.items[i].name + "| Description: "+ myObj.items[i].description;  
        }
    }
    };

   
    
    xmlhttp.open("GET", "https://api.github.com/search/repositories?q='Javascript'", true); 
    xmlhttp.send(); 
}


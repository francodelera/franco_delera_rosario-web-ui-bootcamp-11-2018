

function getRepos() { 
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) {  
            var myObj = JSON.parse(this.responseText);
            test= document.createElement('section'); //creates the section element in the HTML
            test.setAttribute('id','test'); //sets an id called test to that section element
            var ul= document.createElement('ul'); //creates an ul element
            document.body.appendChild(test); //append test as a child of the body element
            test.appendChild(ul); // append the created ul element as a child of the section element
            var li= document.createElement('li');
            ul.appendChild(li);
            li.innerHTML= li.innerHTML + "User Name: "+ myObj.login + "<br> URL: "+ myObj.url + "<br> Repositories: " + myObj.repos_url;
            //this fetch de image from the API and show it on its corresponding item
            var img = document.createElement("img");
            test.appendChild(img);
            img.src = myObj.avatar_url;
        
    }
    if (this.readyState === 4 && this.status === 404) {
        p = document.createElement('p');
        document.body.appendChild(p);
        if (txt_input === "") {
            p.innerHTML = p.innerHTML + "Error. Debe ingresar un numbre de usuario";
        } else {
        p.innerHTML = p.innerHTML + "Error: The user \"" + txt_input + "\" does not exist on database. Try again.";
    }
}
    };

    var txt_input = document.getElementById("user-name").value;
    
    
    xmlhttp.open("GET", "https://api.github.com/users/"+txt_input, true); 
    xmlhttp.send(); 
}

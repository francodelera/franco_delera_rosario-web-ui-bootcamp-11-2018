

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
            var li= document.createElement('li'); // creates the li element
            ul.appendChild(li); //and adding this as a child of the ul element
            li.innerHTML= li.innerHTML + "User Name: "+ myObj.login + "<br> Name: " + myObj.name + "<br> Bio: " + myObj.bio + "<br> URL: " + myObj.html_url + "<br> Repositories: " + myObj.repos_url + "<br> Number of repositories: " + myObj.public_repos;
            //this fetch the image from the API and shows it on its corresponding item
            var img = document.createElement("img"); //creates the img element
            test.appendChild(img); //insert the img element into test (section)
            img.src = myObj.avatar_url; //another way to add an attribute, taking the url from the API and applying it to the attribute src of img element
        
    }
    if (this.readyState === 4 && this.status === 404) {
        p = document.createElement('p');
        document.body.appendChild(p);
        if (txt_input === "") { //this is when no value is entered on the text input
            p.innerHTML = p.innerHTML + "Error: You must enter a username";
        } else { //and this is when there is no such user on the database
        p.innerHTML = p.innerHTML + "Error: The user \"" + txt_input + "\" does not exist on database. Try again.";
    }
}
    };

    var txt_input = document.getElementById("user-name").value;
    
    
    xmlhttp.open("GET", "https://api.github.com/users/"+txt_input, true); 
    xmlhttp.send(); 
}

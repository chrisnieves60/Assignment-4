const leftButton = document.getElementById("button-text"); 
document.getElementById("right-button").addEventListener("click",function(){leftButton.innerText="No, Im right!"})
document.getElementById("left-button").addEventListener("click",function(){leftButton.innerText="NOOOO, Im right!!!"})
//first bullet point

const hoverTag = document.getElementById("dont-hover"); 
document.getElementById("dont-hover").addEventListener("mouseover", function() {
    hoverTag.style.fontSize = "50px"; 
    hoverTag.innerText = "I SAID DONT HOVER!!!"; 
})
document.getElementById("dont-hover").addEventListener("mouseout", function() {
    hoverTag.innerText = "dont hover over me";
    hoverTag.style.fontSize = "40px";
})
h1Tag = document.createElement("h1")
document.body.append(h1Tag); 

var form = document.querySelector("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

    function doThis() {
    
    let password=document.getElementById("password").value;
    if (password=="12345678"){
        h1Tag.innerText="Success!"; 
    }
    
    else if (password!="12345678"){
        h1Tag.innerText="failure"; 
    }
}



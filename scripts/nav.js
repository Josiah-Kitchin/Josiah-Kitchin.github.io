

const displayNavMenu = () => {
   //Displays the navMenu and adjusts page accordingly
    let nav = document.getElementById("navMenu"); 
    let info = document.getElementById("info"); 

    if (nav.style.display === "none"){
        nav.style.display = "block";  
        info.style.diplsay = "none";  
    }
    else{
        nav.style.display = "none";
        info.style.display = "block"; 
    }
}


const addNavListeners = () => {
    //adds navigation listeners

    let toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", displayNavMenu); 

    let navItems = document.getElementsByClassName("navItem"); 
    for (let i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("click", displayNavMenu); 
    }
}


addNavListeners();





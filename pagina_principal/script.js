document.addEventListener('DOMContentLoaded',()=> {
    const Menu=document.getElementById("Menu");
    const navbar=document.getElementsById("navbar");

    Menu.addEventListener('click', ()=> {
    if(navbar.style.left === "0px") {
        navbar.style.left = "-250px";
    }  else{
        navbar.style.left="0px";
    }  
    });
})
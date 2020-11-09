var myNav = document.getElementById('navbar');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ){
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};


document.getElementById('buy').addEventListener('click',()  =>{
    //window.location.href="#tiles-sell";
  var elmnt = document.getElementById("tiles-sell");
  elmnt.scrollIntoView();
});

document.getElementById('sell').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    var elmnt = document.getElementById("tiles-sell");
  elmnt.scrollIntoView();
});


//Home Button

document.getElementById('home-btn').addEventListener('click',()  =>{
  //window.location.href="#tiles.sell";
  var elmnt = document.getElementById("navbar");
elmnt.scrollIntoView();
});



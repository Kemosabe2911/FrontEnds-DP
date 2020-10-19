//Year1
document.getElementById('year1').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    var elmnt = document.getElementById("year1-section");
    elmnt.style.display= 'block';
  elmnt.scrollIntoView();
  });

//Year2
document.getElementById('year2').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    document.getElementById("year1-section").style.display='none';
    var elmnt = document.getElementById("year2-section");
    elmnt.style.display= 'block';
  elmnt.scrollIntoView();
  });

//Home Buttons

document.getElementById('home-btn').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    var elmnt = document.getElementById("navbar");
  elmnt.scrollIntoView();
  });
 
document.getElementById('home-btn2').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    var elmnt = document.getElementById("navbar");
  elmnt.scrollIntoView();
  });
   
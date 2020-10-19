function display(p){
    p.style.display='block';
    p.style.display='flex';
    p.style.alignItems='center';
}


//Year1
document.getElementById('year1').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    var elmnt = document.getElementById("year1-section");
    display(elmnt);
  elmnt.scrollIntoView();
  });

//Year2
document.getElementById('year2').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    document.getElementById("year1-section").style.display='none';
    var elmnt = document.getElementById("year2-section");
    display(elmnt);
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
   
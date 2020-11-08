const buttons = document.querySelectorAll('a');
buttons.forEach( btn =>{
    btn.addEventListener('onmouseover', function(e) {

        let x= e.clientX - e.target.offsetLeft;
        let y= e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
    })
})
function cross() {
    var a = document.getElementById("bttn");
    a.classList.toggle("change");
  }

  let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});
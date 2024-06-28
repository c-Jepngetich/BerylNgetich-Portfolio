const nav = document.querySelector ("nav")

window.addEventListener( "scroll", function (){
    nav.classList.toggle("sticky", window.scrollY >120);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbarLinks = document.querySelector('.navbar-links');

    menuIcon.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });
});
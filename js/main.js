// Selecting DOM items
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const tarot = document.querySelector('.tarot');
const navItems = document.querySelectorAll('.nav-item');


// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        tarot.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        tarot.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}

// Body animation which adds visibility
$(document).ready(function() {
  $('.body').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');
  });
});
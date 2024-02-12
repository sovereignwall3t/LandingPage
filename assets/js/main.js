/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        // default items count
        items: 3,
        // autoplay is optional
        // autoplay: false,
        margin: 30,
        loop: true,
        dots: true,
        // responsive settings
        responsive: {
          0: {
              items: 1 // In extra-small devices (mobile phones), show 1 item
          },
          576: {
              items: 2 // In small devices (larger phones), show 2 items
          },
          768: {
              items: 2 // In medium devices (tablets), show 2 items
          },
          992: {
              items: 3 // In large devices (desktops), show 3 items
          }
        }
    });
  });
  
sr.reveal(`.home__data`, {origin: 'top', delay: 400})
sr.reveal(`.home__img`, {origin: 'bottom', delay: 600})
sr.reveal(`.home__footer`, {origin: 'bottom', delay: 800})
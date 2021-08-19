// hambuger
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");

hamburger.addEventListener("click", () =>{
  navlinks.classList.toggle("active");
}) 

var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};
var slideBottom = {
    distance: '150%',
    origin: 'top',
    opacity: null
};
var slideLeft = {
    distance: '150%',
    origin: 'right',
    opacity: null
};
var slideRight = {
    distance: '150%',
    origin: 'left',
    opacity: null
};

// hero-text
ScrollReveal().reveal('.hero-text', slideRight);

// about
ScrollReveal().reveal('.about', slideLeft);

// products items
ScrollReveal().reveal('.item-1', slideRight);
ScrollReveal().reveal('.item-2', slideLeft);
ScrollReveal().reveal('.item-3', slideRight);

// check
ScrollReveal().reveal('.blog', slideUp);

// contact
ScrollReveal().reveal('.contact', slideLeft);


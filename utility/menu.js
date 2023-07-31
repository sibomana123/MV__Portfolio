const navLink = document.querySelector('.nav');
const ToggleMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.fa-xmark');

ToggleMenu.addEventListener('click', () => {
  navLink.classList.add('openNav');
});
closeMenu.addEventListener('click', () => {
  navLink.classList.remove('openNav');
});

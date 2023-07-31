const navLink = document.querySelector('.nav');
const ToggleMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.fa-xmark');
const mobNavbar = document.getElementById('navbar__ul');

ToggleMenu.addEventListener('click', () => {
  navLink.classList.add('openNav');
});
closeMenu.addEventListener('click', () => {
  navLink.classList.remove('openNav');
});

mobNavbar.addEventListener('click', (event) => {
  navLink.classList.remove('openNav');
});
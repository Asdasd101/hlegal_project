document.addEventListener("DOMContentLoaded", function () {
const navIcon = document.querySelector(".nav__icon");
const nav = document.querySelector(".header");


navIcon.addEventListener("click", function () {
    nav.classList.toggle("active");
});
});
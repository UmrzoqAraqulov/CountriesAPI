const darkMode = document.querySelector("body");
const iconDarkMode = document.querySelector(".dark-mode");
const navBar = document.querySelector(".nav");

iconDarkMode.addEventListener("click", function () {
  darkMode.classList.toggle("darkMode");
});

window.addEventListener("scroll", function () {
  shrink();
});

function shrink() {
  if (scrollY > 40) {
    navBar.classList.add("nav-shrink");
  } else {
    navBar.classList.remove("nav-shrink");
  }
}

const hamburgerMenu = document.querySelector("#hamburger-menu");
const header = document.querySelector("#header");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll("nav a");

const arrowClose = document.querySelector("img[alt='arrow-right']");
hamburgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  header.classList.toggle("open-menu");
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    header.classList.remove("open-menu");
  }

  e.stopPropagation();
});

arrowClose.addEventListener("click", () => {
  header.classList.remove("open-menu");
});

window.addEventListener("click", () => {
  header.classList.remove("open-menu");
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 640) {
    header.classList.remove("open-menu");
  }
});

const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const backDrop = document.querySelector(".backdrop");
const links = document.querySelector(".links");

menuOpen.addEventListener("click", () => {
  menuOpen.classList.add("active");
  menuClose.classList.add("active");
  backDrop.classList.add("active");
  links.classList.add("active");
});

menuClose.addEventListener("click", () => {
  menuOpen.classList.remove("active");
  menuClose.classList.remove("active");
  backDrop.classList.remove("active");
  links.classList.remove("active");
});

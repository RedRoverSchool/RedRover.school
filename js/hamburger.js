const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleMenu);
})
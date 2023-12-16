let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll("a[href^='#']");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      let targetId = this.getAttribute("href");
      scrollToSection(targetId);
    });
  });
});

function scrollToSection(sectionId) {
  let targetSection = document.querySelector(sectionId);
  if (targetSection) {
    let headerHeight = document.querySelector(".header").offsetHeight;
    let targetPosition = targetSection.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

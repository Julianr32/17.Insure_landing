const navToggle = document.querySelector(".nav__toggle"),
  nav = document.querySelector(".nav"),
  navList = document.querySelector(".nav__list"),
  navLink = document.querySelectorAll(".nav__item");

navToggle.addEventListener("click", () => {
  if (nav.classList.contains("open")) {
    removeMenu();
  } else {
    showMenu();
  }
});

//Hide menu on link click.
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      removeMenu();
    } else {
      showMenu();
    }
  });
});

function removeMenu() {
  nav.classList.remove("open");
  navList.classList.remove("fade-in");
  navList.classList.add("fade-out");
  document.querySelector("body").style.overflow = "auto";
}

function showMenu() {
  nav.classList.add("open");
  navList.classList.remove("fade-out");
  navList.classList.add("fade-in");
  document.querySelector("body").style.overflow = "hidden";
}

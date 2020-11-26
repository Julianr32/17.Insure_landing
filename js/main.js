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
}

function showMenu() {
  nav.classList.add("open");
  navList.classList.remove("fade-out");
  navList.classList.add("fade-in");
}

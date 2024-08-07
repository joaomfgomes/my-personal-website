// selecting the html elements
const hambIcon = document.querySelector(".hamb");
const navMobile = document.querySelector(".nav");

// activating the hamburger and mobile nav
hambIcon.addEventListener("click", function () {
  hambIcon.classList.toggle("active");
  navMobile.classList.toggle("slide");
});

// hide mobile navigation after clicking a link or clicking outside
document.onclick = function (n) {
  if (n.target.id !== "hamb" && n.target.it !== "nav__menu") {
    hambIcon.classList.remove("active");
    navMobile.classList.remove("slide");
  }
};

// adding sticky animation to the navigation
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", scrollY > 0);
});

// mixitup for filtering the portfolio works
const containerEl = document.querySelector(".portfolio__gallery");

var mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});

mixer.filter("*");

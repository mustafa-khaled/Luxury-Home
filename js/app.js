// Links
const navbar = document.getElementById("navbar");
// Menu Icon Container
const menuBtn = document.querySelector(".menu");
// Menu Icon
const openList = document.querySelector(".open-list");
const header = document.getElementById("header");
const headerHeight = header.clientHeight;

// Show Side Bar
menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  openList.classList.toggle("fa-times");
});

// Add BackGround To Header On Scroll
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  if (scrollPosition > headerHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Set to true to enable pagination clickable
  },

  breakpoints: {
    1100: {
      slidesPerView: 4,
    },
    850: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    250: {
      slidesPerView: 1,
    },
  },
});

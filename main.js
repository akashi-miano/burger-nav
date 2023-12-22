const navToggle = document.querySelector(".navToggle");
const mobileMenu = document.querySelector(".desktopNav");
const toggleIcon = document.querySelector(".navToggle i");

navToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("clicked");
  if (mobileMenu.classList.contains("clicked")) {
    toggleIcon.classList.replace("fa-bars", "fa-x");
  } else toggleIcon.classList.replace("fa-x", "fa-bars");
});

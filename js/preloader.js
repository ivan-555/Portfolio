const preloader     = document.getElementById('preloader');
const landingPage = document.querySelector(".page.about");
const sidebar = document.querySelector(".sidebar");

window.addEventListener("load", () => {
  // Hide preloader
  preloader.classList.add("hidden")
  // Show landing page and sidebar
  landingPage.classList.add("active");
  sidebar.style.display = "flex";
})
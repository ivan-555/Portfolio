// Sections Arrow Navigation
const sectionSwitchButton = document.querySelector(".section-switch-button");
const aboutPageSlider = document.querySelector(".page.about .slider");
const landingPage = document.querySelector(".page.about")

let currentAboutSection = "section1";

sectionSwitchButton.addEventListener("click", () => {
    // Tracks load of the page to add different animations for initial and subsequent loads (display: block -> retriggers animations)
    landingPage.classList.remove("initial-load")
    if (!landingPage.classList.contains("subsequent-load")){
        landingPage.classList.add("subsequent-load")
    }

    if (currentAboutSection === "section1") {
        aboutPageSlider.style.transform = "translateY(-100svh)"
        // change transform value depending on media query arrow position
        if (window.innerWidth < 570 && window.innerHeight < 700) {
            sectionSwitchButton.style.transform = "translate(-50%, 90px) rotate(180deg)"
        }
        else if (window.innerWidth < 570 && window.innerHeight < 780) {
            sectionSwitchButton.style.transform = "translate(-50%, 100px) rotate(180deg)"
        }
        else if (window.innerWidth < 570 && window.innerHeight < 850) {
            sectionSwitchButton.style.transform = "translate(-50%, 110px) rotate(180deg)"
        }
        else if (window.innerWidth < 1550 && window.innerHeight < 850) {
            sectionSwitchButton.style.transform = "translate(-50%, 110px) rotate(180deg)"
        } else {
            sectionSwitchButton.style.transform = "translate(-50%, 150px) rotate(180deg)"
        }
        currentAboutSection = "section2"
    } else {
        aboutPageSlider.style.transform = "translateY(0)"
        sectionSwitchButton.style.transform = "translate(-50%, 0) rotate(0)"
        currentAboutSection = "section1"
    }
})



// Projects Link
const aboutProjectsLink = document.querySelector(".page.about .section2 .projects-link");
const sidebarProjectsLink = document.querySelector('.sidebar .navigation li[data-target="projects"]');

aboutProjectsLink.addEventListener("click", () => {
    sidebarProjectsLink.click()
})




// Intersection Observer to trigger animations
const section1 = document.querySelector(".page.about .section1");
const section2 = document.querySelector(".page.about .section2");

const observerOptions = {
  root: null,
  threshold: 0.5 // 0.5 = 50% of the element
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    } else {
      entry.target.classList.remove("in-view");
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

observer.observe(section1);
observer.observe(section2);

// Sections Arrow Navigation
const sectionSwitchButton = document.querySelector(".section-switch-button");
const aboutPageSlider = document.querySelector(".page.about .slider");

let currentAboutSection = "section1";

sectionSwitchButton.addEventListener("click", () => {
    if (currentAboutSection === "section1") {
        aboutPageSlider.style.transform = "translateY(-100vh)"
        sectionSwitchButton.style.transform = "translate(-50%, 150px) rotate(180deg)"
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
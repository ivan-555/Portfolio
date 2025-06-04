// Sections Arrow Navigation
const sectionSwitchButton = document.querySelector(".section-switch-button");
const aboutPageSlider = document.querySelector(".page.about .slider");

let currentAboutSection = "section1";

sectionSwitchButton.addEventListener("click", () => {
    if (currentAboutSection === "section1") {
        aboutPageSlider.style.transform = "translateY(-100vh)"
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
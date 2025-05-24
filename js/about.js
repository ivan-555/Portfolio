// Sections Arrow Navigation
const sectionsArrow = document.querySelector(".sections-arrow");
const sectionsArrowText = document.querySelector(".sections-arrow span")
const sectionsSlider = document.querySelector(".page.about .slider");

let sectionCounter = 1;

sectionsArrow.addEventListener("click", () => {
    if (sectionCounter === 1) {
        sectionsSlider.style.transform = "translateY(-100vh)";
        sectionsArrow.classList.add("animate-down");
        sectionsArrowText.style.right = "-50px" // Get to know me exit speed
        sectionCounter = 2;
        // Reposition to avoid long distance transform which causes fast animation
        setTimeout(() => {
            sectionsArrowText.style.right = "80px" // About entry speed
        }, 200)
        // Change and reposition Text at the time when it is invis in the Animation
        setTimeout(() => {
            sectionsArrowText.innerText = ""
            sectionsArrowText.style.right = "80px"
        }, 400)
        // Remove animation klass to avoid re-trigger
        // Use rotated klass to keep the end value of the animation without needing forwards
        setTimeout(() => {
            sectionsArrow.classList.remove("animate-down");
            sectionsArrow.classList.add("rotated")
        }, 700)
    }
    else if (sectionCounter === 2) {
        sectionsSlider.style.transform = "translateY(0vh)";
        sectionsArrow.classList.add("animate-up");
        sectionsArrowText.style.right = "10px" // About exit speed
        sectionCounter = 1;
        // Reposition to avoid small distance transform which causes slow animation
        setTimeout(() => {
            sectionsArrowText.style.right = "-40px" // Get to know me entry speed
        }, 200)
        // Change and reposition Text at the time when it is invis in the Animation
        setTimeout(() => {
            sectionsArrowText.innerText = "Mehr über mich"
            sectionsArrowText.style.right = "10px"
        }, 400)
        // Remove animation klass to avoid re-trigger
        setTimeout(() => {
            sectionsArrow.classList.remove("animate-up");
            sectionsArrow.classList.remove("rotated")
        }, 700)
    }
})



// Kontaktform Link
const contactFormLink = document.querySelector(".about .paragraph-wrapper .contact-form-link");
const sidebarNavigationContactLink = document.querySelector('.sidebar .navigation li[data-target="contact"]');

console.log(contactFormLink)
console.log(sidebarNavigationContactLink)

contactFormLink.addEventListener("click", () => {
    sidebarNavigationContactLink.click()
})
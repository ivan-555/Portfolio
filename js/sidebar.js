const sidebar = document.querySelector(".sidebar")
const sidebarLinks = document.querySelectorAll(".sidebar .navigation li");
const hamburger = document.querySelector(".hamburger");
const pages = document.querySelectorAll(".window .page");
const landingPage = document.querySelector(".page.about")

let sidebarStatus = "closed";
let sidebarInitialOpen = false;

// Sidebar Navigation
sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Tracks load of the page to add different animations for initial and subsequent loads (display: block -> retriggers animations)
        landingPage.classList.remove("initial-load")
        landingPage.classList.add("subsequent-load")

        const linkDataTarget = link.dataset.target;

        sidebarLinks.forEach(link => {
            link.classList.remove("active")
        })

        link.classList.add("active")

        pages.forEach(page => {
            page.classList.remove("active")

            if (page.classList.contains(linkDataTarget)) {
                page.classList.add("active")
            }
        })

        // Close Mobile Sidebar
        if (window.innerWidth < 1100) {
            hamburger.classList.remove("toX")
            sidebar.style.transform =  "translateX(-100%)"
            sidebarStatus = "closed"
        }
    })
})


// Mobile Sidebar Toggle
hamburger.addEventListener("click", () => {
    if (sidebarStatus === "closed") {
        hamburger.classList.add("toX")
        sidebar.style.transform =  "translateX(0)"
        sidebarStatus = "open"
        if (!sidebarInitialOpen) {
            sidebar.classList.add("initial-open");
            sidebarInitialOpen = true;
        }
    } else if (sidebarStatus === "open") {
        hamburger.classList.remove("toX")
        sidebar.style.transform =  "translateX(-100%)"
        sidebarStatus = "closed"
    }
})
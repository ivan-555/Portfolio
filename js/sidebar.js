const sidebarLinks = document.querySelectorAll(".sidebar ul li");
const pages = document.querySelectorAll(".window .page");

sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
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
    })
})
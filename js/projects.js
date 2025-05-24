const allPages = document.querySelectorAll(".page")
const projectSelectors = document.querySelectorAll(".page.projects .project")
const projectPages = document.querySelectorAll(".page.project")

projectSelectors.forEach(projectSelector => {
    const dataTarget = projectSelector.dataset.target

    projectSelector.addEventListener("click", () => {
        allPages.forEach(page =>{
            page.classList.remove("active")

            if (page.classList.contains(dataTarget)){
                page.classList.add("active")
            }
        })
    })
})
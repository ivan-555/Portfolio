import { syncPerProject } from "./project.js";

const allPages = document.querySelectorAll(".page")
const projectSelectors = document.querySelectorAll(".page.projects .project")

projectSelectors.forEach(projectSelector => {
  const dataTarget = projectSelector.dataset.target;

  projectSelector.addEventListener("click", () => {
    allPages.forEach(page => {
      page.classList.remove("active");
      // Reset observed elements
      page.querySelectorAll(".observed").forEach(element => {
        element.classList.remove("in-view")
      });
      if (page.classList.contains(dataTarget)) {
        page.classList.add("active");
      }
    });

    // After showing page sync video sizes
    syncPerProject();
  });
});
// Project slector click logic -> show project page + sync videos + init page animations
import { syncPerProject, initPageAnimations } from "./project.js";

const allPages = document.querySelectorAll(".page");
const projectSelectors = document.querySelectorAll(".page.projects .project");

projectSelectors.forEach(projectSelector => {
  const dataTarget = projectSelector.dataset.target;

  projectSelector.addEventListener("click", () => {
    allPages.forEach(page => {
      page.classList.remove("active");
      // Reset all project pages animations to replay them on next view
      page.querySelectorAll(".anim-item.in-view").forEach(el => {
        el.classList.remove("in-view");
        el.style.animationDelay = "";
      });
    });

    // View corrisponding page
    const targetPage = document.querySelector(`.page.project.${dataTarget}`);
    if (targetPage) {
      targetPage.classList.add("active");
      // Trigger animations
      initPageAnimations(targetPage);
      // Sync Videos
      syncPerProject();
    }
  });
});
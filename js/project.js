// Return Button
const returnBtns = document.querySelectorAll(".return-btn")
const allPages = document.querySelectorAll(".page")

returnBtns.forEach(returnBtn => {
    returnBtn.addEventListener("click", () => {
        allPages.forEach(page => {
            page.classList.remove("active")

            if (page.classList.contains("projects")){
                page.classList.add("active")
            }
        })
    })
})


// Video play
document.querySelectorAll(".video-wrapper").forEach(wrapper => {
  const video = wrapper.querySelector("video")
  const overlay = wrapper.querySelector(".play-overlay")
  const icon = wrapper.querySelector(".play-overlay i")

  wrapper.isManuallyPaused = false // Flag if its manually paused to avoid conflicts with hover

  wrapper.addEventListener("mouseenter", () => {
    if (!wrapper.isManuallyPaused) {
      video.play()
      overlay.classList.add("hide")
      icon.classList.remove("active")
    }
  })

  wrapper.addEventListener("mouseleave", () => {
    if (!wrapper.isManuallyPaused) {
      video.pause()
      overlay.classList.remove("hide")
      icon.classList.add("active")
    }
  })

  wrapper.addEventListener("click", e => {
    e.stopPropagation()
    if (video.paused) {
      video.play()
      wrapper.isManuallyPaused = false
      overlay.classList.add("hide")
      icon.classList.remove("active")
    } else {
      video.pause()
      wrapper.isManuallyPaused = true
      overlay.classList.remove("hide")
      icon.classList.add("active")
    }
  })
})

document.addEventListener("click", e => {
  if (!e.target.closest(".video-wrapper")) {
    document.querySelectorAll(".video-wrapper").forEach(wrapper => {
      const video = wrapper.querySelector("video")
      const overlay = wrapper.querySelector(".play-overlay")
      const icon = wrapper.querySelector(".play-overlay i")
      if (!video.paused) {
        video.pause()
      }
      overlay.classList.remove("hide")
      icon.classList.add("active")
      wrapper.isManuallyPaused = true
    })
  }
})




// Sync all Project Pages Videos
// Set Mobile View Video Height to same as Desktop Video Height
// Set Full View Video Width to same as Desktop + Mobile Video Width
// Function gets called on project selector click in projects.js
const projectPages = document.querySelectorAll(".page.project");
export function syncPerProject() {
  projectPages.forEach(section => {
    const desktopView = section.querySelector(".video-wrapper.desktop-view");
    if (!desktopView) return;

    // Get desktop view height and set it to the mobile views
    const height = desktopView.getBoundingClientRect().height;
    section.querySelectorAll(".video-wrapper.mobile-view").forEach(mobileView => {
      mobileView.style.height = `${height}px`;
    });

    // Calculate desktop view + mobile view width
    const widthDesktop = desktopView.getBoundingClientRect().width;
    const mobileView = section.querySelector(".video-wrapper.mobile-view");
    const widthMobile = mobileView.getBoundingClientRect().width
    const totalWidth = widthDesktop + widthMobile;
    
    // Set total width to full view video
    section.querySelectorAll(".video-wrapper.full-view").forEach(fullView => {
      fullView.style.width = `${totalWidth}px`;
    });
  });
}

window.addEventListener("load", syncPerProject);
window.addEventListener("resize", syncPerProject);






//  Initiates all page animations
// Function gets called on project selector click in projects.js
export function initPageAnimations(projectPage) {
  const animItems = projectPage.querySelectorAll(".anim-item");
  if (animItems.length === 0) return;

  const initiallyVisible = [];
  const initiallyHidden  = [];

  animItems.forEach(el => {
    const rect = el.getBoundingClientRect();
    // Check if element is initialy in viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      initiallyVisible.push(el);
    } else {
      initiallyHidden.push(el);
    }
  });

  // Staggered animation delay for initialy visible elements
  const STEP_DELAY = 0.2; // 200ms Steps
  initiallyVisible.forEach((el, index) => {
    const delay = index * STEP_DELAY;
    el.style.animationDelay = `${delay}s`;
    el.classList.add("in-view");
  });

  // Intersection Observer for all initially hidden elements
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If scrolled into view -> animate
        entry.target.style.animationDelay = ".1s";
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target); // after animation unobserve the element to not retrigger scroll into view
      }
    });
  }, observerOptions);

  initiallyHidden.forEach(el => observer.observe(el));
}
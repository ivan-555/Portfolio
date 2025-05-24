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


// Video hover play
document.querySelectorAll(".video-wrapper").forEach(wrapper => {
  const video    = wrapper.querySelector("video");
  const playIcon = wrapper.querySelector(".play-overlay i");

  wrapper.addEventListener("mouseenter", () => {
    video.play();
    playIcon.style.opacity = "0";
  });

  wrapper.addEventListener("mouseleave", () => {
    video.pause();
    playIcon.style.opacity = "0.7";
  });
});


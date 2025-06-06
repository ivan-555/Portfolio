const form = document.querySelector(".page.contact form");
const inputs = document.querySelectorAll(".page.contact form input")
const textarea = document.querySelector(".page.contact form textarea")
const sendButton = document.querySelector(".page.contact form button")

function checkAllValid() {
  const inputsValid   = Array.from(inputs).every(i => i.checkValidity());
  const textareaValid = textarea.checkValidity();
  return inputsValid && textareaValid;
}

// Set ready class on button if the form is valid -> ready animation
function updateButtonState() {
  if (checkAllValid()) {
    sendButton.classList.add("ready");
  } else {
    sendButton.classList.remove("ready");
  }
}


inputs.forEach(input => {
  input.addEventListener("input", updateButtonState);
});
textarea.addEventListener("input", updateButtonState);

window.addEventListener("load", updateButtonState);


// If form is valid set clicked klass on button -> clicked animation
sendButton.addEventListener("click", () => {
    if (checkAllValid()) {
        sendButton.classList.add("clicked")
    }
})

// Reset after getform.io page
window.addEventListener("load", () => {
    form.reset();
    sendButton.classList.remove("clicked")
});

const progressBar = document.getElementById("progress-bar");
const previousButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const steps = document.querySelectorAll(".circle");

// Keep track of how many steps are currently active.
let currentActive = 1;

nextButton.addEventListener("click", () => {
  currentActive++;
  if (currentActive > 4) {
    currentActive = 4;
  }
  updateDom();
});

previousButton.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateDom();
});

function updateDom() {
  if (currentActive === 1) {
    previousButton.disabled = true;
  } else if (currentActive === steps.length) {
    nextButton.disabled = true;
  } else {
    previousButton.disabled = false;
    nextButton.disabled = false;
  }

  steps.forEach((step, index) => {
    if (index < currentActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");

  progressBar.style.width =
    ((actives.length - 1) / (steps.length - 1)) * 100 + "%";
}

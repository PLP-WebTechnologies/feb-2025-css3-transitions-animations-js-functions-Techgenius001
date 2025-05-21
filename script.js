// Get elements
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
const colorPicker = document.getElementById("colorPicker");

// Function to trigger animation by toggling class
function triggerAnimation() {
  box.classList.add("bounce");
  // Remove the class after animation ends so it can be triggered again
  box.addEventListener(
    "animationend",
    () => {
      box.classList.remove("bounce");
    },
    { once: true }
  );
}

// Function to save color preference in localStorage
function saveColorPreference(color) {
  localStorage.setItem("preferredColor", color);
}

// Function to load color preference from localStorage
function loadColorPreference() {
  const savedColor = localStorage.getItem("preferredColor");
  if (savedColor) {
    box.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
}

// Event listeners
animateBtn.addEventListener("click", triggerAnimation);

colorPicker.addEventListener("input", (e) => {
  const color = e.target.value;
  box.style.backgroundColor = color;
  saveColorPreference(color);
});

// Load saved preferences on page load
window.addEventListener("load", loadColorPreference);

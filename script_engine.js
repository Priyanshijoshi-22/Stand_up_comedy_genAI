// script_engine.js
const mouth = document.getElementById("mouth");
let mouthTimer = null;

function startMouthAnimation() {
  if (!mouth) return;
  stopMouthAnimation();
  mouthTimer = setInterval(() => {
    const h = Math.random() * 8 + 4; // between 4 and 12
    mouth.setAttribute("height", h);
  }, 120);
}

function stopMouthAnimation() {
  if (mouthTimer) {
    clearInterval(mouthTimer);
    mouthTimer = null;
  }
  if (mouth) {
    mouth.setAttribute("height", 4); // reset closed
  }
}

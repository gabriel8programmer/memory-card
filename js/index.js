import $ from "./elements.js";
import BTN from "./buttons.js";

$.btnStart.addEventListener("click", BTN.startGame);
$.btnForwardStep.addEventListener("click", BTN.forwardStep);
$.btnBackwardStep.addEventListener("click", BTN.backwardStep);

//arrays
//define action for each level buttons
$.btnsLevel.forEach(btn => {
  btn.addEventListener("click", BTN.initGame);
});
$.btnsMenu.forEach(btn => {
  btn.addEventListener("click", BTN.backMenu);
});
$.btnsRestart.forEach(btn => {
  btn.addEventListener("click", BTN.restartGame);
});
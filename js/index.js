import Elements from "./Elements.js";
import Buttons from "./Buttons.js";

Elements.btnStart.addEventListener("click", Buttons.startGame);
Elements.btnForwardStep.addEventListener("click", Buttons.forwardStep);
Elements.btnBackwardStep.addEventListener("click", Buttons.backwardStep);

//arrays
//define action for each level buttons
Elements.btnsLevel.forEach(btn => {
  btn.addEventListener("click", Buttons.initGame);
});
Elements.btnsMenu.forEach(btn => {
  btn.addEventListener("click", Buttons.backMenu);
});
Elements.btnsRestart.forEach(btn => {
  btn.addEventListener("click", Buttons.restartGame);
});
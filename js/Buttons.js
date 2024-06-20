import Utils from "./Utils.js";
import Elements from "./Elements.js";
import Game from "./game.js";

class Buttons {
  static startGame(){
    //Utils.hide menu and Utils.show levels menu
    Utils.hide(Elements.containerMenu);
    Utils.show(Elements.containerLevelMenu);
    //play Audio
    Utils.Audio("../sounds/btn-config-click.mp3").play();
  }

  static exitGame(){
    //Utils.hide in the app
    Utils.hide(Elements.containerMenu);
    Utils.show(Elements.containerExited);
    //play sound
    Utils.Audio("../sounds/btn-back-click.mp3").play();
  }

  static backMenu(e){
    //Utils.hide levels and Utils.show menu
    Utils.hide(e.target.parentNode.parentNode);
    Utils.show(Elements.containerMenu);
    Game.reset();
    //play sound
    Utils.Audio("../sounds/btn-back-click.mp3").play();
  }

  static restartGame(e){
    //Utils.hide the screen
    Utils.hide(e.target.parentNode.parentNode);
    Utils.show(stage);
    Game.reset();
    Game.start();
    //play sound
    Utils.Audio("../sounds/btn-config-click.mp3").play();
  }

  static initGame(e){
    //get data
    const data = e.target.dataset;
    //Utils.hide levels menu and Utils.show stage
    Utils.hide(Elements.containerLevelMenu);
    Utils.show(stage);
    //init game
    Game.init(data);
    //play sound
    Utils.Audio("../sounds/btn-config-click.mp3").play();
  }

  static handleRestartButton(e, data) {
    //Utils.hide the screen
    Utils.hide(e.target.parentNode.parentNode);
    Utils.show(stage);
    Game.reset();
    Game.init(data);
  }

  static forwardStep(e){
    let data = "";
    switch (Game.levelMode) {
      case "easy":
        data = document.querySelector("#normal").dataset;
        break;
      case "normal":
        data = document.querySelector("#hard").dataset;
        break
    }
    Buttons.handleRestartButton(e, data);
    //play sound
    Utils.Audio("../sounds/btn-game-click.mp3").play();
  }

  static backwardStep(e) {
    let data = "";
    switch (Game.levelMode) {
      case "normal":
        data = document.querySelector("#easy").dataset;
        break;
      case "hard":
        data = document.querySelector("#normal").dataset;
        break
    }
    Buttons.handleRestartButton(e, data);
    //play sound
    Utils.Audio("../sounds/btn-game-click.mp3").play();
  }
}

export default Buttons;

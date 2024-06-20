
import Utils from "./Utils.js";
import Elements from "./elements.js";
import Assets from "./Assets.js";

class Game {
  constructor() {
    // HTML elements
    this.stage = Elements.stage;
    this.containerMenu = Elements.containerMenu;
    this.containerGameover = Elements.containerGameover;
    this.containerWin = Elements.containerWin;
    this.winMode = Elements.winMode;
    this.winDuration = Elements.winDuration;
    this.winYourTime = Elements.winYourTime;
    this.containerCards = null;
    this.cards = [];
    this.containerStopwatch = null;
    this.durationElt = null;
    this.timeEl = null;
    this.btnBackwardStep = null;
    this.btnForwardStep = null;

    // Game variables
    this.loopStopwatch = null;
    this.levelMode = "";
    this.duration = 0;
    this.time = 0;
    this.countCards = 0;
    this.gameover = false;
    this.sortedSequence = [];
    this.pairs = [];
    this.currentPlay = [];
    this.assets = null;
    this.imgsCard = [];
    this.iconCard = "";
    this.win = false;
  }

  rotateCard(card, char) {
    Utils.Audio("../sounds/flip-card.mp3").play();
    card.classList.add("card-rotate");
    setTimeout(() => {
      card.classList.remove("card-rotate");
    }, 950);
    setTimeout(() => {
      card.innerHTML = char;
    }, 450);
  }

  showCard(card) {
    if (!card.classList.contains("card-hide")) {
      return null;
    }
    card.classList.remove("card-hide");
    card.classList.add("check");

    const index = this.cards.indexOf(card);
    const value = Math.floor(this.sortedSequence.indexOf(index) / 2);
    const char = this.imgsCard[value];

    this.rotateCard(card, char);
    return { index, value };
  }

  hideCard(card) {
    setTimeout(() => {
      this.rotateCard(card, this.iconCard);
      card.classList.add("card-hide");
      card.classList.remove("check");
    }, 1000);
  }

  updateCurrentPlay(play) {
    if (play === null) return;
    this.currentPlay.push(play);
  }

  checkGameover() {
    clearInterval(this.loopStopwatch);
    Utils.hide(this.stage);
    Utils.remove(this.containerCards, this.containerStopwatch);

    if (this.win) {
      Utils.show(this.containerWin);
      this.winMode.innerText = this.levelMode;
      this.winDuration.innerText = Utils.formatInMinSec(this.duration);
      this.winYourTime.innerText = Utils.formatInMinSec(this.time);
      this.btnForwardStep = this.containerWin.querySelector(".btn-forward-step");
      Utils.show(this.btnForwardStep);
      if (this.levelMode === "hard") {
        Utils.hide(this.btnForwardStep);
      }
      setTimeout(() => {
        Utils.Audio("../sounds/success.mp3").play();
      }, 100);
      return;
    }

    Utils.show(this.containerGameover);
    this.btnBackwardStep = this.containerGameover.querySelector(".btn-backward-step");
    Utils.show(this.btnBackwardStep);
    if (this.levelMode === "easy") {
      Utils.hide(this.btnBackwardStep);
    }
    setTimeout(() => {
      Utils.Audio("../sounds/negative-beeps.mp3").play();
    }, 100);
  }

  verifyVictory() {
    const completed = this.cards.every(card => !card.classList.contains("card-hide"));
    if (completed) {
      this.gameover = true;
      this.win = true;
      this.checkGameover();
    }
  }

  checkCombinations() {
    if (this.currentPlay.length < 2) return;
    const v1 = this.currentPlay[0].value;
    const v2 = this.currentPlay[1].value;
    if (v1 === v2) {
      this.currentPlay = [];
      this.verifyVictory();
      setTimeout(() => {
        Utils.Audio("../sounds/bonus-points.mp3").play();
      }, 1000);
      return;
    }
    this.currentPlay.forEach(({ index }) => {
      const card = this.cards[index];
      this.hideCard(card);
    });
    this.currentPlay = [];
  }

  updateCards(e) {
    const card = e.target;
    const play = this.showCard(card);
    this.updateCurrentPlay(play);
    this.checkCombinations();
  }

  createCard() {
    const card = document.createElement("div");
    card.classList.add("card", "card-hide");
    card.innerHTML = this.iconCard;
    card.addEventListener("click", this.updateCards.bind(this));
    return card;
  }

  createCards() {
    this.containerCards = document.createElement("div");
    this.containerCards.classList.add("container-cards", `container-cards-${this.levelMode}`);
    for (let i = 0; i < this.countCards; i++) {
      const card = this.createCard();
      this.cards.push(card);
      this.containerCards.appendChild(card);
    }
    this.stage.appendChild(this.containerCards);
  }

  sortCards() {
    for (let c = 0; c < this.countCards; c++) {
      let n = 0;
      do {
        n = Math.floor(Math.random() * this.countCards);
      } while (this.sortedSequence.includes(n));
      this.sortedSequence.push(n);
    }
    this.pairs = this.sortedSequence.reduce((a, n, i) => {
      if (i % 2 === 0) {
        a.push([n, this.sortedSequence[i + 1]]);
      }
      return a;
    }, []);
  }

  createTimeElt(time) {
    const elt = document.createElement("span");
    elt.className = "stopwatch-time";
    elt.id = "time";
    elt.style.width = `${100 - parseInt((100 / this.duration) * this.time)}%`;
    return elt;
  }

  updateStopWatch() {
    this.loopStopwatch = setInterval(() => {
      this.time++;
      Utils.remove(this.timeEl);
      this.timeEl = this.createTimeElt(this.time);
      this.containerStopwatch.appendChild(this.timeEl);

      if (this.time >= this.duration) {
        this.gameover = true;
        this.checkGameover();
      }
    }, 1000);
  }

  createStopwatch() {
    this.containerStopwatch = document.createElement("div");
    this.containerStopwatch.id = "stopwatch";
    this.containerStopwatch.classList.add("container-stopwatch");

    this.timeEl = this.createTimeElt(this.time);
    this.containerStopwatch.append(this.timeEl);
    this.stage.appendChild(this.containerStopwatch);

    this.updateStopWatch();
  }

  start() {
    this.createStopwatch();
    this.createCards();
    this.sortCards();
  }

  reset() {
    this.cards = [];
    this.sortedSequence = [];
    this.pairs = [];
    this.currentPlay = [];
    this.time = 0;
    this.gameover = false;
    this.win = false;
  }

  setOptions(){
    //define assets
    this.assets = Assets.getAssets("country");
    this.imgsCard = this.assets.imgs;
    this.iconCard = this.assets.icon;
  }

  init({ mode, duration, countCards }) {
    this.setOptions();
    this.levelMode = mode;
    this.duration = duration;
    this.countCards = countCards;
    this.start();
  }
}

const game = new Game();
export default game;


class Elements {
    static root = document.querySelector(":root");
    static main = document.querySelector("main");
    static containerMenu = document.querySelector("#menu");
    static containerExited = document.querySelector("#exited");
    static containerLevelMenu = document.querySelector("#level-mode");
    static stage = document.querySelector("#stage");
    static containerGameover = document.querySelector("#gameover");
    static containerWin = document.querySelector("#win");
    static winMode = document.querySelector("#statistic-mode");
    static winDuration = document.querySelector("#statistic-duration");
    static winYourTime = document.querySelector("#statistic-your-time");    static btnsMenu = document.querySelectorAll(".btn-menu");
    static btnsRestart = document.querySelectorAll(".btn-restart");
    static btnStart = document.querySelector("#start");
    static btnsLevel = document.querySelectorAll(".btn-mode");
    static btnForwardStep = document.querySelector(".btn-forward-step");
    static btnBackwardStep = document.querySelector(".btn-backward-step");
}

export default Elements;
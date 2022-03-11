import HoneyMaker from "./HoneyMaker.js";

const honeyMaker = new HoneyMaker();

setInterval(function () {
  honeyMaker.activateAutoClickers();
  honeyMaker.disableAutoClicker();
  totalDisplay.innerText = "Honey jars: " + numberWithCommas(Math.round(honeyMaker.honeyCount));

  setInterval(function () {
    honeyPerSecond.innerText =
      "Honey jars earned per Click: " +
       numberWithCommas(Math.pow(1.2, honeyMaker.honeyMultiplier).toFixed(3));
    autoDisplay.innerText = "Worker Bees purchased: " +  numberWithCommas(honeyMaker.autoClicker);
    showAutoClickerPrice.innerText =
      "Next Worker Bee will cost " +
       numberWithCommas(honeyMaker.autoClickerCost) +
      " jars of honey";
    mulitDisplay.innerText =
      "Forager groups purchased : " +  numberWithCommas(honeyMaker.honeyMultiplier);

    multiCount.innerText =
      "Next group of Forager Bees will cost " +
       numberWithCommas(honeyMaker.honeyMultiplierCost) +
      " jars of honey";
  }, 150);
}, 1000);

setInterval(function () {
  honeyPerSecond.innerText =
    "Honey jars earned per Click: " +
    Math.pow(1.2, honeyMaker.honeyMultiplier).toFixed(3);
}, 150);

const addHoneyBtn = document.querySelector(".honeyButton");
const totalDisplay = document.querySelector(".totalHoneyCount");
const addAutoClickBtn = document.querySelector(".autoClicker");
const autoDisplay = document.querySelector(".totalAutoClickerCount");
const addMulitBtn = document.querySelector(".honeyMultiplier");
const mulitDisplay = document.querySelector(".totalHoneytMultiplierCount");
const showAutoClickerPrice = document.querySelector(".auto-clicker-display");
const resetGame = document.querySelector(".resetButton");
const honeyPerSecond = document.querySelector(".honeyPerSecond");
const multiCount = document.querySelector(".totalMutiCount");

resetGame.addEventListener("click", () => {
  honeyMaker.resetGame();
});

addHoneyBtn.addEventListener("click", () => {
  honeyMaker.addToHoneyCount();
  totalDisplay.innerText = "Honey jars: " + Math.round(honeyMaker.honeyCount);
});

addAutoClickBtn.addEventListener("click", () => {
  honeyMaker.addToAutoClickerCount();

  totalDisplay.innerText = "Honey jars: " + Math.round(honeyMaker.honeyCount);
});

addMulitBtn.addEventListener("click", () => {
  honeyMaker.addToHoneyMultiplierCount();

  totalDisplay.innerText = "Honey jars: " + Math.round(honeyMaker.honeyCount);
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

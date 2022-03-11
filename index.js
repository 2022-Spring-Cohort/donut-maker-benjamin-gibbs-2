
import HoneyMaker from "./HoneyMaker.js";



const honeyMaker = new HoneyMaker();

setInterval(function(){
  honeyMaker.activateAutoClickers();
  honeyMaker.disableAutoClicker();
  totalDisplay.innerText = "Honey jars: " + Math.round(honeyMaker.honeyCount);

  setInterval(function () {
    honeyPerSecond.innerText =
      "Honey jars earned per Click: " +
      Math.pow(1.2, honeyMaker.honeyMultiplier).toFixed(3);
        autoDisplay.innerText = "Worker Bees purchased: " + honeyMaker.autoClicker;
        showAutoClickerPrice.innerText =
          "Next Worker Bee will cost " +
          honeyMaker.autoClickerCost +
          " jars of honey";
            mulitDisplay.innerText =
              "Forager group purchased : " +
              honeyMaker.honeyMultiplier;
 

              multiCount.innerText="Next group of Forager Bees will cost " + honeyMaker.honeyMultiplierCost + " jars of honey";
  }, 150);
},1000);

setInterval (function(){
  honeyPerSecond.innerText =
    "Honey jars earned per Click: " +
    Math.pow(1.2, honeyMaker.honeyMultiplier).toFixed(3);
},150);


const addHoneyBtn = document.querySelector(".honeyButton");
const totalDisplay = document.querySelector(".totalHoneyCount")
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
})

addHoneyBtn.addEventListener("click", () => {
  honeyMaker.addToDonutCount();
  totalDisplay.innerText = "Honey jars: " + Math.round(honeyMaker.honeyCount);
})


addAutoClickBtn.addEventListener("click", () =>{

  honeyMaker.addToAutoClickerCount();

  totalDisplay.innerText = "Honey jars: " + Math.round(honeyMaker.honeyCount);
})




addMulitBtn.addEventListener("click", () =>{
  honeyMaker.addToDonutMultiplierCount();

  totalDisplay.innerText = "Honey jars: " + Math.round(honeyMaker.honeyCount);
})








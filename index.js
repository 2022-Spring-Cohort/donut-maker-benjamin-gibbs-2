
import DonutMaker from "./DonutMaker.js";



const donutMaker = new DonutMaker();

setInterval(function(){
  donutMaker.activateAutoClickers();
  donutMaker.disableAutoClicker();
  totalDisplay.innerText = "Honey jars: " + Math.round(donutMaker.donutCount);

  setInterval(function () {
    donutsSecond.innerText =
      "Honey jars earned per Click: " +
      Math.pow(1.2, donutMaker.donutMultiplier).toFixed(3);
        autoDisplay.innerText = "Worker Bees purchased: " + donutMaker.autoClicker;
        showAutoClickerPrice.innerText =
          "Next Worker Bee will cost " +
          donutMaker.autoClickerCost +
          " jars of honey";
            mulitDisplay.innerText =
              "Forager group purchased : " +
              donutMaker.donutMultiplier;
 

              multiCount.innerText="Next group of Forager Bees will cost " + donutMaker.donutMultiplierCost + " jars of honey";
  }, 150);
},1000);

setInterval (function(){
  donutsSecond.innerText =
    "Honey jars earned per Click: " +
    Math.pow(1.2, donutMaker.donutMultiplier).toFixed(3);
},150);


const addDonutBtn = document.querySelector(".donutButton");
const totalDisplay = document.querySelector(".totalDonutCount")
const addAutoClickBtn = document.querySelector(".autoClicker");
const autoDisplay = document.querySelector(".totalAutoClickerCount");
const addMulitBtn = document.querySelector(".donutMultiplier");
const mulitDisplay = document.querySelector(".totalDonutMultiplierCount");
const showAutoClickerPrice = document.querySelector(".auto-clicker-display");
const resetGame = document.querySelector(".resetButton");
const donutsSecond = document.querySelector(".donutsPerSecond");
const multiCount = document.querySelector(".totalMutiCount");


resetGame.addEventListener("click", () => {
donutMaker.resetGame();
})

addDonutBtn.addEventListener("click", () => {
  donutMaker.addToDonutCount();
  totalDisplay.innerText = "Honey jars: " + Math.round(donutMaker.donutCount);
})


addAutoClickBtn.addEventListener("click", () =>{

  donutMaker.addToAutoClickerCount();

  totalDisplay.innerText = "Honey jars: " + Math.round(donutMaker.donutCount);
})




addMulitBtn.addEventListener("click", () =>{
  donutMaker.addToDonutMultiplierCount();

  totalDisplay.innerText = "Honey jars: " + Math.round(donutMaker.donutCount);
})








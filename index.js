
import DonutMaker from "./DonutMaker.js";



const donutMaker = new DonutMaker();
// let donutCount = donutMaker.donutCount;
// donutMaker.addToDonutCount()
setInterval(function(){
  donutMaker.activateAutoClickers();
    donutMaker.disableAutoClicker();
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount) ;
//  +
//  "\nDonuts earned per Click: " + Math.pow(1.2, donutMaker.donutMultiplier);
},1000);


const addDonutBtn = document.querySelector(".donutButton");
const totalDisplay = document.querySelector(".totalDonutCount")
const addAutoClickBtn = document.querySelector(".autoClicker");
const autoDisplay = document.querySelector(".totalAutoClickerCount");
const addMulitBtn = document.querySelector(".donutMultiplier");
const mulitDisplay = document.querySelector(".totalDonutMultiplierCount");
const showAutoClickerPrice = document.querySelector(".auto-clicker-display");
const resetGame = document.querySelector(".resetButton");

//    showAutoClickerPrice.innerText = autoClicker;

resetGame.addEventListener("click", () => {
donutMaker.resetGame();
})

addDonutBtn.addEventListener("click", () => {
  donutMaker.addToDonutCount();
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount);
})


addAutoClickBtn.addEventListener("click", () =>{

  donutMaker.addToAutoClickerCount();
  autoDisplay.innerText = "Auto Clicker Count: " + donutMaker.autoClicker;
  showAutoClickerPrice.innerText = "the next upgrade will cost " + donutMaker.autoClickerCost + " donuts" ;
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount);
})




addMulitBtn.addEventListener("click", () =>{
  donutMaker.addToDonutMultiplierCount();
  mulitDisplay.innerText = "Mutlipliers purchased : " + donutMaker.donutMultiplier + "\nNext Mutliplier Cost: " + donutMaker.donutMultiplierCost +  "\nDonuts earned per Click: " + (Math.pow(1.2, (donutMaker.donutMultiplier))).toFixed(3);
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount);
})






;

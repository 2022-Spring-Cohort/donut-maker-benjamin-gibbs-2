
import DonutMaker from "./DonutMaker.js";



const donutMaker = new DonutMaker();
// let donutCount = donutMaker.donutCount;
// donutMaker.addToDonutCount()
setInterval(function(){
  donutMaker.activateAutoClickers();
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount);
},1000);


const addDonutBtn = document.querySelector(".donutButton");
const totalDisplay = document.querySelector(".totalDonutCount")
const addAutoClickBtn = document.querySelector(".autoClicker");
const autoDisplay = document.querySelector(".totalAutoClickerCount");
const addMulitBtn = document.querySelector(".donutMultiplier");
const mulitDisplay = document.querySelector(".totalDonutMultiplierCount");
const showAutoClickerPrice = document.querySelector(".auto-clicker-display");

//    showAutoClickerPrice.innerText = autoClicker;

addDonutBtn.addEventListener("click", () => {
  donutMaker.addToDonutCount();
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount);
})


addAutoClickBtn.addEventListener("click", () =>{
  donutMaker.addToAutoClickerCount();
  autoDisplay.innerText = "Auto Clicker Count: " + donutMaker.autoClicker;
  showAutoClickerPrice.innerText = "the next upgrade will cost " + donutMaker.autoClickerCost + " donuts";
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount);
})




addMulitBtn.addEventListener("click", () =>{
  donutMaker.addToDonutMultiplierCount();
  mulitDisplay.innerText = "Mutlipliers purchased : " + donutMaker.donutMultiplier + "\nNext Mutliplier Cost: " + donutMaker.donutMultiplierCost;
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount);
})






;

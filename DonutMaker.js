export default class DonutMaker {
    constructor(donutCount, donutMultiplier, autoClicker){
    this.donutCount = 99;
    this.donutMultiplier = 0;
    this.autoClicker = 0;
    this.autoClickerCost = 100;
    }
    addToDonutCount() {
        this.donutCount ++;
//        this.donutCount += Math.power(1.2, this.donutMultiplier);
//        if (this.donutMultiplier == 0) {
//        this.donutCount = this.donutCount;
//        }
//        else { this.donutCount += Math.power(1.2, this.donutMultiplier); }
    }
    addToAutoClickerCount(){
        if (this.donutCount >= this.autoClickerCost){
        this.autoClicker ++;
        this.donutCount -= this.autoClickerCost;
        this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);
    }
    console.log("Not enough donuts");
}
    activateAutoClickers(){
        for (let i = -0; i < this.autoClicker; i++) {
        this.addToDonutCount();
        }
        console.log(this.autoClicker);
    }
}
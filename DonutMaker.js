export default class DonutMaker {




    constructor(donutCount, donutMultiplier, autoClicker){
    this.donutCount = 0;
    this.donutMultiplier = 0;
    this.donutMultiplierCost = 10;
    this.autoClicker = 0;
    this.autoClickerCost = 100;
    }



    addToDonutCount() {
        this.donutCount ++;

        if (this.donutMultiplier == 0) {
        this.donutCount = this.donutCount;

        }
        else { this.donutCount += Math.pow(1.2, this.donutMultiplier);

        }
    }




     addToDonutMultiplierCount(){
        if (this.donutCount >= this.donutMultiplierCost){
        this.donutMultiplier ++;
        this.donutCount -= this.donutMultiplierCost;
        this.donutMultiplierCost = Math.round(this.donutMultiplierCost * 1.1);
        console.log(this.donutMultiplierCost + "test");
    }
        else {
console.log("You fcker");
}
}



    addToAutoClickerCount(){
        if (this.donutCount >= this.autoClickerCost){
        this.autoClicker ++;
        this.donutCount -= this.autoClickerCost;
        this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);

    }
        else {
console.log("You need more donuts to purchase an AutoClicker");
}
}
    activateAutoClickers(){
        for (let i = -0; i < this.autoClicker; i++) {
        this.addToDonutCount();
        }
        console.log(this.autoClicker);
    }
}
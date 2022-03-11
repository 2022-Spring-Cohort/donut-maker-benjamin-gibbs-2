export default class HoneyMaker {




    constructor(honeyCount, honeyMultiplier, autoClicker){
    this.honeyCount = 99;
    this.honeyMultiplier = 0;
    this.honeyMultiplierCost = 10;
    this.autoClicker = 0;
    this.autoClickerCost = 100;
    }



    addToDonutCount() {
        this.honeyCount ++;

        if (this.honeyMultiplier == 0) {
        this.honeyCount = this.honeyCount;

        }
        else { this.honeyCount += Math.pow(1.2, this.honeyMultiplier);

        }
    }




     addToDonutMultiplierCount(){
        if (this.honeyCount >= this.honeyMultiplierCost){
        this.honeyMultiplier ++;
        this.honeyCount -= this.honeyMultiplierCost;
        this.honeyMultiplierCost = Math.round(this.honeyMultiplierCost * 1.10);
    }

}



    addToAutoClickerCount(){
        if (this.honeyCount >= this.autoClickerCost){
        this.autoClicker ++;
        this.honeyCount -= this.autoClickerCost;
        this.autoClickerCost = Math.round(this.autoClickerCost * 1.10);


    }
        else {
console.log("You need " + this.autoClickerCost + " jars of Honey to purchase the next AutoClicker upgrade");
}
}
    activateAutoClickers(){
        for (let i = -0; i < this.autoClicker; i++) {
        this.addToDonutCount();
        }
        console.log(this.autoClicker);
    }

    getAutoClickerCount() {
    return autoClicker;
    }

    resetGame() {
    location.reload();
    }

    disableAutoClicker() {
    const autoClickerBtn = document.querySelector(".autoClicker");
    if (this.honeyCount < this.autoClickerCost) {
        autoClickerBtn.disabled = true;
    }
    else {
        autoClickerBtn.disabled = false;
    }
    }


    disableDonutMutliplier() {
    const mutliplierBtn = document.querySelector(".donutMultiplier");
    if (this.honeyCount < this.honeyMultiplierCost) {
        mutliplierBtn.disabled = true;
    }
    else {
        mutliplierBtn.disabled = false;
    }
    }
}
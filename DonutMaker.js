export default class DonutMaker {




    constructor(donutCount, donutMultiplier, autoClicker){
    this.donutCount = 99;
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

    bake() {
     DonutMaker.donutCount =+ DonutMaker.donutMultiplier;
        spawnSpinningDonut();
        updateText();
    }

    
     addToDonutMultiplierCount(){
        if (this.donutCount >= this.donutMultiplierCost){
        this.donutMultiplier ++;
        this.donutCount -= this.donutMultiplierCost;
        this.donutMultiplierCost = Math.round(this.donutMultiplierCost * 1.10);  //THIS IS THE CORRECT NUMBER FOR THIS CALCULATION
//        console.log(this.donutMultiplierCost + "test"); ---THIS IS NOT NEEDED, BUT DOES CONSOLE OUT
    }
        else {
console.log("You fcker");
}
}



    addToAutoClickerCount(){
        if (this.donutCount >= this.autoClickerCost){
        this.autoClicker ++;
        this.donutCount -= this.autoClickerCost;
        this.autoClickerCost = Math.round(this.autoClickerCost * 1.10);


    }
        else {
console.log("You need " + this.autoClickerCost + " donuts to purchase the next AutoClicker upgrade");
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
    if (this.donutCount < this.autoClickerCost) {
        autoClickerBtn.disabled = true;
    }
    else {
        autoClickerBtn.disabled = false;
    }
    }


    disableDonutMutliplier() {
    const mutliplierBtn = document.querySelector(".donutMultiplierButton");
    if (this.donutCount < this.donutMultiplierCost) {
        mutliplierBtn.disabled = true;
    }
    else {
        mutliplierBtn.disabled = false;
    }
    }
}
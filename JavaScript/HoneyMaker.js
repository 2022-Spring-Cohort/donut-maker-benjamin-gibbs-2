export default class HoneyMaker {
  constructor(honeyCount, honeyMultiplier, autoClicker) {
    this.honeyCount = 0;
    this.honeyMultiplier = 0;
    this.honeyMultiplierCost = 10;
    this.autoClicker = 0;
    this.autoClickerCost = 100;
  }

  addToHoneyCount() {
    this.honeyCount++;

    if (this.honeyMultiplier == 0) {
      this.honeyCount = this.honeyCount;
    } else {
      this.honeyCount += Math.pow(1.2, this.honeyMultiplier);
    }
  }

  addToHoneyMultiplierCount() {
    if (this.honeyCount >= this.honeyMultiplierCost) {
      this.honeyMultiplier++;
      this.honeyCount -= this.honeyMultiplierCost;
      this.honeyMultiplierCost = Math.round(this.honeyMultiplierCost * 1.1);
    }
  }

  addToAutoClickerCount() {
    if (this.honeyCount >= this.autoClickerCost) {
      this.autoClicker++;
      this.honeyCount -= this.autoClickerCost;
      this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);
    } else {
      console.log(
        "You need " +
          this.autoClickerCost +
          " jars of Honey to purchase the next AutoClicker upgrade"
      );
    }
  }
  
  activateAutoClickers() {
    for (let i = -0; i < this.autoClicker; i++) {
      this.addToHoneyCount();
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
    } else {
      autoClickerBtn.disabled = false;
    }
  }

  disableHoneyMutliplier() {
    const mutliplierBtn = document.querySelector(".donutMultiplier");
    if (this.honeyCount < this.honeyMultiplierCost) {
      mutliplierBtn.disabled = true;
    } else {
      mutliplierBtn.disabled = false;
    }
  }
}

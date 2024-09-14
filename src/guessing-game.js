let number =0
class GuessingGame {
  constructor() {
  
    }

    setRange(min, max) {
     this.numberMin = min;
     this.numberMax = max;

    }

    guess() {
  
          this.solution =Math.ceil((this.numberMax + this.numberMin) / 2);
          return this.solution
     
    }

    lower() {
     this.numberMax = this.solution
    }

    greater() {
      this.numberMin = this.solution
    }
}

module.exports = GuessingGame;

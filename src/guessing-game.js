class GuessingGame {
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.half = Math.round((this.min + this.max) / 2);
    }

    lower() {
        return this.max = this.half;
    }

    greater() {
        return this.min = this.half;
    }
}

module.exports = GuessingGame;
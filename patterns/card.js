//Strategy
class CardStrategy {
    constructor(card) {
        this.card = card
    }

    chooseStrategy(){
        switch (this.card) {
            case "SilverCardStrategy":
                return new SilverCardStrategy()
            case "GoldCardStrategy":
                return new GoldCardStrategy()
            case "NoCardStrategy":
                return new NoCardStrategy()
            default:
                return
        }
    }
}

class SilverCardStrategy{

    makeDiscount() {
        myBasket.setTotalPrice(myBasket.getTotalPrice() * 0.9)
    }
}

class GoldCardStrategy{
    constructor() {
        this.points = 0;
    }

    makeDiscount() {
        myBasket.setTotalPrice(myBasket.getTotalPrice() * 0.8)
        this.getPoints();
    }

    getPoints() {
        this.points = this.points * 0.1
    }

    usePoints() {
        myBasket.setTotalPrice(myBasket.getTotalPrice() - this.points)
    }
}

class NoCardStrategy{
    makeDiscount() {
        console.log("Sorry, you don't have card")
    }
}
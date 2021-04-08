//Strategy
//class for defining strategies for different cards
class CardStrategy {
    constructor(card) {
        this.card = card
    }

    //method for determining the strategy, depending on the chosen card
    chooseStrategy(){
        switch (this.card) {
            case "SilverCardStrategy":
                return new SilverCardStrategy()
            case "GoldCardStrategy":
                return new GoldCardStrategy()
            default:
                return new NoCardStrategy()
        }
    }
}
//strategy for the silver card
class SilverCardStrategy{

    //method for getting 10% discount
    makeDiscount() {
        myBasket.setTotalPrice(myBasket.getTotalPrice() * 0.9)
    }
}

//strategy for the gold card
class GoldCardStrategy{
    constructor() {
        this.points = 0;
    }

    //method for getting 20% discount
    makeDiscount() {
        myBasket.setTotalPrice(myBasket.getTotalPrice() * 0.8)
        this.getPoints();
    }

    //method for getting points
    //on the card(2 points are awarded for each purchase)
    getPoints() {
        this.points = this.points + 2
    }

    //method for using points on a card
    usePoints() {
        myBasket.setTotalPrice(myBasket.getTotalPrice() - this.points)
        this.points = 0
    }
}

//strategy if there is no card
class NoCardStrategy{
    makeDiscount() {
        console.log("Sorry, you don't have card")
    }
}
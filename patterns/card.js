//Strategy
//class for defining strategies for different cards
class CardStrategy {
    constructor(card, basket) {
        this.card = card
        this.basket = basket
    }

    //method for determining the strategy, depending on the chosen card
    chooseStrategy(){
        switch (this.card) {
            case "SilverCardStrategy":
                return new SilverCardStrategy(this.basket)
            case "GoldCardStrategy":
                return new GoldCardStrategy(this.basket)
            default:
                return new NoCardStrategy()
        }
    }
}
//strategy for the silver card
class SilverCardStrategy{
    constructor(basket) {
        this.basket = basket;
    }

    //method for getting 10% discount
    makeDiscount() {
        this.basket.setTotalPrice(this.basket.getTotalPrice() * 0.9)
    }
}

//strategy for the gold card
class GoldCardStrategy{
    constructor(basket) {
        this.points = 0;
        this.basket = basket;
    }

    //method for getting 20% discount
    makeDiscount() {
        this.basket.setTotalPrice(this.basket.getTotalPrice() * 0.8)
        this.getPoints();
    }

    //method for getting points
    //on the card(2 points are awarded for each purchase)
    getPoints() {
        this.points = this.points + 2
    }

    //method for using points on a card
    usePoints() {
        this.basket.setTotalPrice(this.basket.getTotalPrice() - this.points)
        this.points = 0
    }
}

//strategy if there is no card
class NoCardStrategy{
    makeDiscount() {
        console.log("Sorry, you don't have card")
    }
}
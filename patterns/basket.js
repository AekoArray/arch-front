//Singleton
//Basket in one instance
class Basket {
    //saved the reference to the instance in a static constructor property
    constructor() {
        //In the constructor it is checked whether the
        // instance exists and if it does not exist,
        // create it and start referring to it, if it exists,
        // then the constructor receives a reference to it
        if (typeof Basket.instance === 'object') {
            return Basket.instance;
        }
        this.products = [];
        this.totalPrice = 0;
        Basket.instance = this;
        return this;
    }

    //method for calculating the price of all products in the basket
    calculatePrice(){
        let sum = 0;
        this.products.forEach(function (elem){
            sum = sum + elem.getPrice()
        })
        this.totalPrice = sum
    }

    //method for getting the total price
    getTotalPrice() {
        return this.totalPrice;
    }

    //method for changing total price
    setTotalPrice(totalPrice) {
        this.totalPrice = totalPrice;
    }

    //method for getting an array of products in the basket
    getProducts() {
        return this.products;
    }

    //method for adding a product to the basket
    addProduct(product) {
        this.products.push(product)
        this.calculatePrice()
    }
}
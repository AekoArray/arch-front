//Singleton
class Basket {
    constructor() {
        if (typeof Basket.instance === 'object') {
            return Basket.instance;
        }
        this.products = [];
        this.totalPrice = 0;
        Basket.instance = this;
        return this;
    }

    calculatePrice(){
        let sum = 0;
        this.products.forEach(function (elem){
            sum = sum + elem.getPrice()
        })
        this.totalPrice = sum
    }

    getTotalPrice() {
        return this.totalPrice;
    }

    setTotalPrice(totalPrice) {
        this.totalPrice = totalPrice;
    }

    getProducts() {
        return this.products;
    }

    addProduct(product) {
        this.products.push(product)
        this.calculatePrice()
    }
}
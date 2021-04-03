//Factory pattern
class Product {
    constructor(name, number, price) {
        this.name = name;
        this.number = number;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    getNumber() {
        return this.number
    }
}

class ProductFactory {
    take(type, number) {
        if (type === "Apple")
            return new Product(type, number, number*10);
        if (type === "Bottle of water")
            return new Product(type, number, number*20);
        if (type === "Chocolate")
            return new Product(type, number, number*40);
    }
}
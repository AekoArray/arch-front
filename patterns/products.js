//Factory pattern
//super class, on the basis of which the same
//objects with different values are created
class Product {
    //a constructor that takes the name of the
    //product, the quantity of products and the price of the product
    constructor(name, number, price) {
        this.name = name;
        this.number = number;
        this.price = price;
    }

    //method for getting the price of a product
    getPrice() {
        return this.price;
    }

    //method for getting the quantity of a product
    getNumber() {
        return this.number
    }

    //method for getting the type of a product
    getName() {
        return this.name
    }
}

//factory class for products
class ProductFactory {
    //a product is created depending on the type and quantity
    take(type, number) {
        if (type === "Apple")
            return new Product(type, number, number*10);
        if (type === "Bottle of water")
            return new Product(type, number, number*20);
        if (type === "Chocolate")
            return new Product(type, number, number*40);
    }
}
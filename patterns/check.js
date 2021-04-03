class Check extends Basket {
    constructor() {
        super();
    }
}

//Decorator
class Letter {
    constructor(check) {
        this.check = check;
    }

    sendCheck() {
        this.sendEmail()
    }

    sendEmail() {
        Email.send({
            Host : "smtp.mail.ru",
            Username : "11111@mail.ru",
            Password : "11111",
            To : '11111@mail.ru',
            From : "11111@mail.ru",
            Subject : "Your check",
            Body : `The price of your products: ${this.check.getTotalPrice()}`
        }).then(
            message => alert(message)
        );
    }
}
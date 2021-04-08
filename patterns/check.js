//class inherited from the basket
class Check extends Basket {
    constructor() {
        super();
    }
}

//Decorator
//class extending the possibilities of the check
class Letter {
    constructor(check) {
        this.check = check;
    }

    //method for sending a check to the mail
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
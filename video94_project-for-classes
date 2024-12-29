class Customer {
    constructor(fullname,address,orders) {
        this.fullname = fullname;
        this.address = address;
        if (orders===undefined) {
            this.orders = [];
        }
        else {
            this.orders = orders;
        }
    }
    
    placeOrder(order) {
        this.orders.push(order);
    }
    
    toString() {
        let str = `Fullname: ${this.fullname}\n Address: ${this.address}\n + "=======================\n"`;
        let rest = "";
        let sum = 0.0;
        for (let order of this.orders) {
            rest += "\n" + order;
            sum += order.payment.amount;
        }
        return str + rest + `\n\nSum = ${sum}`;
    }
}

class Order {
    constructor(date,payment) {
        this.date = date;
        this.payment = payment;
    }
    
    toString() {
        return `Date: ${this.date}.\nPayment: ${this.payment}`
    }
}

class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    
    toString() {
        return this.amount;
    }
}

class Credit extends Payment {
    constructor(amount,number,expDate) {
        super(amount);
        this.number = number;
        this.expDate = expDate;
    }
    
    toString() {
        return super.toString() + `Credit: Number: ${this.number}\nExp.Date: ${this.expDate}`;
    }
}

class Check extends Payment {
    constructor(amount,number,bankCode) {
        super(amount);
        this.number = number;
        this.bankCode = bankCode;
    }
    
    toString() {
        return super.toString() + ` Check: Number: ${this.number}\nBank code: ${this.bankCode} `;
    }
}

let customer = new Customer("George Michael","London");
customer.placeOrder(new Order("202020", new Payment(12.12)));
console.log(customer);
customer.placeOrder(new Order("202012", new Credit(12.67,"6543796567","7843")));
customer.placeOrder(new Order("202010", new Check(22.12,"32678954","7865")));
console.log(`${customer}`);


/** @typedef {"USD" | "EUR" | "UAH"} Currency */

export class Exchange {
    /** 
     * @private
     * @type {Object.<Currency, Object.<Currency, number>>}
     */
    static rates = {
        USD: { USD: 1, EUR: 0.91, UAH: 38 },
        EUR: { USD: 1.1, EUR: 1, UAH: 41.5 },
        UAH: { USD: 0.026, EUR: 0.024, UAH: 1 }
    };

    /** 
     * @param {Money} money
     * @param {Currency} to 
     * @returns {Money}
     */
    static convert(money, to) {
        const from = money.currency;

        if (!this.rates[from] || !this.rates[from][to]) {
            throw new Error(`Немає курсу для конвертації ${from} → ${to}`);
        }

        const totalPennies = money.wholePart * 100 + money.pennies;
        const convertedPennies = Math.round(totalPennies * this.rates[from][to]);

        const wholePart = Math.floor(convertedPennies / 100);
        const pennies = convertedPennies % 100;

        return this.createMoneyInstance(to, wholePart, pennies)
    }

    /**
     * @param {Currency} currency
     * @param {number} wholePart
     * @param {number} pennies
     * @returns {Money}
     */
    static createMoneyInstance(currency, wholePart, pennies) {
        switch (currency) {
            case 'USD': return new Dollar(wholePart, pennies);
            case 'EUR': return new Euro(wholePart, pennies);
            case 'UAH': return new UAH(wholePart, pennies);
            default: throw new Error(`Невідома валюта: ${currency}`);
        }
    }
}

export class Money {
    wholePart = 0;
    pennies = 0;
    /** @type {Currency} */
    currency;

    /** 
     * @constructor
     * @param {number} pennies
     * @param {number} wholePart 
     * @param {Currency} currency 
     */
    constructor(wholePart, pennies, currency) {
        this.wholePart = wholePart;
        this.pennies = pennies;
        this.currency = currency;
    }

    /**
     * @returns {string}
     */
    toString() {
        return `${this.wholePart}.${this.pennies}`;
    }
}

export class Dollar extends Money {
    /** 
     * @constructor
     * @param {number} wholePart 
     * @param {number} pennies 
     */
    constructor(wholePart, pennies) {
        super(wholePart, pennies, "USD");
    }

    toString() {
        return `$${super.toString()}`;
    }
}

export class Euro extends Money {
    /** 
     * @constructor
     * @param {number} wholePart 
     * @param {number} pennies 
     */
    constructor(wholePart, pennies) {
        super(wholePart, pennies, "EUR");
    }

    toString() {
        return `€${super.toString()}`;
    }
}

export class UAH extends Money {
    /** 
     * @constructor
     * @param {number} wholePart 
     * @param {number} pennies 
     */
    constructor(wholePart, pennies) {
        super(wholePart, pennies, "UAH");
    }

    toString() {
        return `₴${super.toString()}`;
    }
}

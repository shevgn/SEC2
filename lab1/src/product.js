import { Exchange, Money } from './money.js';

export class Product {
    /** @type {string} */
    name = '';
    /** * @type {Money} */
    price;

    /** 
     * @constructor 
     * @param {string} name
     * @param {Money} price 
     */
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    /** 
     * @param {number} amount
     * @returns {void}
     */
    lowerPrice(amount) {
        if (amount <= 0) {
            throw new Error("Сума має бути більше 0.");
        }

        let totalPennies = this.price.wholePart * 100 + this.price.pennies - amount;

        if (totalPennies < 0) {
            throw new Error(`Ціна товару "${this.name}" не може бути від’ємною.`);
        }

        this.price = Exchange.createMoneyInstance(this.price.currency, Math.floor(totalPennies / 100), totalPennies % 100)

        console.log(`✅ Ціна товару "${this.name}" знижена на ${amount} копійок. Нова ціна: ${this.price.toString()}`);
    }

    getPrice() {
        return this.price.toString();
    }
}

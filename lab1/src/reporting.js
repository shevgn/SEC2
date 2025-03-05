import { Exchange, Money } from './money.js';
import { Product } from './product.js';

/** 
 * @typedef {Object} Report
 * @property {string} type 
 * @property {Date} date
 * @property {Product} product
 * @property {number} quantity
 * @property {Money} totalPrice
 */

export class Reporting {
    /**
     * @constructor
     */
    constructor() {
        this.incomeReports = [];
        this.expenseReports = [];
    }

    /**
     * @param {Product} product 
     * @param {number} quantity 
     * @returns {void}
     */
    registerIncome(product, quantity) {
        /** @type {Report} */
        const report = {
            type: "income",
            date: new Date(),
            product: product,
            quantity: quantity,
            totalPrice: this.calculateTotalPrice(product.price, quantity)
        };
        this.incomeReports.push(report);
    }

    /**
     * @param {Product} product
     * @param {number} productQuantity
     * @param {number} quantity 
     * @returns {void}
     */
    registerExpense(product, productQuantity, quantity) {
        /** @type {Report} */
        const report = {
            type: "expense",
            date: new Date(),
            product: product,
            quantity: quantity,
            totalPrice: this.calculateTotalPrice(product.price, quantity)
        };
        this.expenseReports.push(report);
    }

    /**
     * @param {import('./warehouse.js').WarehouseProduct[]} warehouseProducts 
     * @returns {string}
     */
    formatInventoryReport(warehouseProducts) {
        return warehouseProducts.map((p, index) =>
            `${index + 1}: Product: ${p.product.name} 
        Price: ${p.product.price.wholePart}.${p.product.price.pennies} ${p.product.price.currency} 
        Quantity: ${p.quantity} 
        Last Updated: ${p.lastUpdated.toLocaleDateString()}`)
            .join("\n");
    }

    /**
     * @param {import('./warehouse.js').WarehouseProduct[]} warehouseProducts 
     * @returns {void}
     */
    generateInventoryReport(warehouseProducts) {
        console.log(this.formatInventoryReport(warehouseProducts));
    }

    /**
     * @param {Money} price 
     * @param {number} quantity 
     * @returns {Money} 
     */
    calculateTotalPrice(price, quantity) {
        const totalPennies = price.wholePart * 100 * quantity + price.pennies * quantity;
        return Exchange.createMoneyInstance(
            price.currency,
            Math.floor(totalPennies / 100),
            totalPennies % 100
        );
    }
}

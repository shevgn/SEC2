import { Product } from './product.js';
import { Reporting } from './reporting.js';

/** 
 * @typedef {Object} WarehouseProduct 
 * @property {Product} product
 * @property {number} quantity
 * @property {Date} lastUpdated
 */

export class Warehouse {
    /** @type {WarehouseProduct[]} */
    products = [];

    /** 
     * @constructor
     * @param {WarehouseProduct[]} defaultProducts 
     * @param {Reporting | null} reporting
     */
    constructor(defaultProducts = [], reporting = null) {
        this.products = defaultProducts;
        if (reporting) {
            this.reporting = reporting;
        }
    }

    /**
     * @param {Product} product
     * @returns {void}
     */
    addProduct(product, quantity = 1, lastUpdated = new Date()) {
        const existingProduct = this.products.find(p => p.product.name === product.name);

        if (existingProduct) {
            existingProduct.quantity += quantity;
            existingProduct.lastUpdated = lastUpdated;
        } else {
            this.products.push({ product, quantity, lastUpdated });
        }

        if (this.reporting) {
            this.reporting.registerIncome(product, quantity);
        }
    }


    /** 
     * @param {string} productName
     * @param {number} amount
     * @returns {void}
     */
    changeQuantity(productName, amount) {
        const warehouseProduct = this.products.find(p => p.product.name === productName);

        if (!warehouseProduct) {
            console.log(`❌ Товар "${productName}" не знайдено на складі.`);
            return;
        }

        if (warehouseProduct.quantity - amount < 0) {
            console.log(`❌ Недостатня кількість товару "${productName}" для відвантаження.`);
            return;
        }

        warehouseProduct.quantity += amount;

        if (this.reporting) {
            if (amount > 0) {
                this.reporting.registerIncome(warehouseProduct.product, amount);
            } else {
                this.reporting.registerExpense(warehouseProduct.product, warehouseProduct.quantity, amount);
            }
        }
    }

    /**
     * @param {string} productName 
     * @param {number} amount 
     * @returns {void}
     */
    changePrice(productName, amount) {
        const warehouseProduct = this.products.find(p => p.product.name === productName);

        if (!warehouseProduct) {
            console.log(`❌ Товар "${productName}" не знайдено.`);
            return;
        }

        if (amount < 0) {
            warehouseProduct.product.lowerPrice(Math.abs(amount));
        } else {
            // warehouseProduct.product.increasePrice(amount);
        }
    }

    /** 
     * @param {string} productName 
     * @returns {void} 
     */
    deleteProduct(productName) {
        const initialLength = this.products.length;
        this.products = this.products.filter(p => p.product.name !== productName);

        if (this.products.length === initialLength) {
            console.log(`❌ Товар "${productName}" не знайдено.`);
        } else {
            console.log(`✅ Товар "${productName}" видалено зі складу.`);
        }
    }
}

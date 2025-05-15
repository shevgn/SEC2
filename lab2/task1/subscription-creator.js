/**
 * @typedef {"domestic" | "educational" | "premium"} SubscriptionType
 */

/**
 * @typedef {Object} Subscription
 * @property {number} monthlyFee
 * @property {number} minimumPeriod
 * @property {string[]} features
 * @property {() => void} describe
 */

/**
 * @abstract
 */
export class SubscriptionCreator {
  /**
   * @abstract
   * @param {SubscriptionType} type
   * @returns {Subscription}
   */
  createSubscription(type) {
    throw new Error(
      "Метод createSubscription має бути реалізований у підкласі",
    );
  }

  /**
   * @param {SubscriptionType} type
   * @returns {void}
   */
  purchase(type) {
    const sub = this.createSubscription(type);
    console.log("Купівля підписки:");
    sub.describe();
  }
}

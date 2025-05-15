/**
 * @implements {Subscription}
 */
export class DomesticSubscription {
  constructor() {
    /** @type {number} */ this.monthlyFee = 9.99;
    /** @type {number} */ this.minimumPeriod = 1;
    /** @type {string[]} */ this.features = ["SD streaming", "Ads-supported"];
  }
  describe() {
    console.log(
      `• Domestic — $${this.monthlyFee}/міс, мінімум ${this.minimumPeriod} міс, можливості: ${this.features.join(", ")}`,
    );
  }
}

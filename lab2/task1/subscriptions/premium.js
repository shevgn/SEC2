/**
 * @implements {Subscription}
 */
export class PremiumSubscription {
  constructor() {
    this.monthlyFee = 19.99;
    this.minimumPeriod = 12;
    this.features = [
      "4K streaming",
      "Без реклами",
      "Offline downloads",
      "Кілька екранів",
    ];
  }
  describe() {
    console.log(
      `• Premium — $${this.monthlyFee}/міс, мінімум ${this.minimumPeriod} міс, можливості: ${this.features.join(", ")}`,
    );
  }
}

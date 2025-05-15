/**
 * @implements {Subscription}
 */
export class EducationalSubscription {
  constructor() {
    this.monthlyFee = 4.99;
    this.minimumPeriod = 6;
    this.features = ["HD streaming", "Без реклами", "Освітні канали"];
  }
  describe() {
    console.log(
      `• Educational — $${this.monthlyFee}/міс, мінімум ${this.minimumPeriod} міс, можливості: ${this.features.join(", ")}`,
    );
  }
}

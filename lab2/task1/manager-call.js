import { SubscriptionCreator } from "./subscription-creator.js";
import { DomesticSubscription } from "./subscriptions/domestic.js";
import { EducationalSubscription } from "./subscriptions/educational.js";
import { PremiumSubscription } from "./subscriptions/premium.js";

/**
 * @extends {SubscriptionCreator}
 */
export class ManagerCallCreator extends SubscriptionCreator {
  /** @override */
  createSubscription(type) {
    console.log("[ManagerCall] Перевірка прав користувача");
    switch (type) {
      case "domestic":
        return new DomesticSubscription();
      case "educational":
        return new EducationalSubscription();
      case "premium":
        return new PremiumSubscription();
      default:
        throw new Error(`Невідомий тип: ${type}`);
    }
  }
}

import { ManagerCallCreator } from "./manager-call.js";
import { MobileAppCreator } from "./mobile-app.js";
import { SubscriptionCreator } from "./subscription-creator.js";
import { WebSiteCreator } from "./website.js";

// - DEMO -
(function main() {
  /** @type {SubscriptionCreator[]} */
  const creators = [
    new WebSiteCreator(),
    new MobileAppCreator(),
    new ManagerCallCreator(),
  ];

  console.log("=== Покупка через WebSite ===");
  creators[0].purchase("domestic");
  creators[0].purchase("premium");
  creators[0].purchase("educational");

  console.log("\n=== Покупка через MobileApp ===");
  creators[1].purchase("domestic");
  creators[1].purchase("premium");
  creators[1].purchase("educational");

  console.log("\n=== Покупка через ManagerCall ===");
  creators[2].purchase("domestic");
  creators[2].purchase("premium");
  creators[2].purchase("educational");
})();

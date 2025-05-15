import { DeviceFactory } from "./device-factory.js";
import { BalaxyFactory, IProneFactory, KiaomiFactory } from "./factories.js";

(function main() {
  /** @type {DeviceFactory[]} */
  const factories = [
    new IProneFactory(),
    new KiaomiFactory(),
    new BalaxyFactory(),
  ];

  for (const factory of factories) {
    console.log(`\n=== ${factory.constructor.name} Devices ===`);
    factory.createLaptop().specs();
    factory.createNetbook().specs();
    factory.createEBook().specs();
    factory.createSmartphone().specs();
  }
})();

import { DeviceFactory } from "./device-factory.js";
import {
  BalaxyEBook,
  BalaxyLaptop,
  BalaxyNetbook,
  BalaxySmartphone,
  IProneEBook,
  IProneLaptop,
  IProneNetbook,
  IProneSmartphone,
  KiaomiEBook,
  KiaomiLaptop,
  KiaomiNetbook,
  KiaomiSmartphone,
} from "./products.js";

/**
 * @extends {DeviceFactory}
 */
export class IProneFactory extends DeviceFactory {
  createLaptop() {
    return new IProneLaptop();
  }
  createNetbook() {
    return new IProneNetbook();
  }
  createEBook() {
    return new IProneEBook();
  }
  createSmartphone() {
    return new IProneSmartphone();
  }
}

/**
 * @extends {DeviceFactory}
 */
export class KiaomiFactory extends DeviceFactory {
  createLaptop() {
    return new KiaomiLaptop();
  }
  createNetbook() {
    return new KiaomiNetbook();
  }
  createEBook() {
    return new KiaomiEBook();
  }
  createSmartphone() {
    return new KiaomiSmartphone();
  }
}

/**
 * @extends {DeviceFactory}
 */
export class BalaxyFactory extends DeviceFactory {
  createLaptop() {
    return new BalaxyLaptop();
  }
  createNetbook() {
    return new BalaxyNetbook();
  }
  createEBook() {
    return new BalaxyEBook();
  }
  createSmartphone() {
    return new BalaxySmartphone();
  }
}

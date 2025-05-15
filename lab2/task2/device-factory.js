/**
 * @interface DeviceFactory
 */
export class DeviceFactory {
  /** @returns {Laptop} */
  createLaptop() {
    throw new Error("Not implemented");
  }
  /** @returns {Netbook} */
  createNetbook() {
    throw new Error("Not implemented");
  }
  /** @returns {EBook} */
  createEBook() {
    throw new Error("Not implemented");
  }
  /** @returns {Smartphone} */
  createSmartphone() {
    throw new Error("Not implemented");
  }
}

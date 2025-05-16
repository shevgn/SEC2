/**
 * @typedef {Object} Character
 * @property {string} name
 * @property {number} height
 * @property {string} build
 * @property {string} hairColor
 * @property {string} eyeColor
 * @property {string[]} outfit
 * @property {string[]} inventory
 * @property {string[]} deeds
 */

/**
 * Fluent Builder interface for any game character.
 * @interface
 */
export class CharacterBuilder {
  /** @returns {CharacterBuilder} */
  setName(name) {
    throw new Error("Not implemented");
  }
  /** @returns {CharacterBuilder} */
  setHeight(cm) {
    throw new Error("Not implemented");
  }
  /** @returns {CharacterBuilder} */
  setBuild(build) {
    throw new Error("Not implemented");
  }
  /** @returns {CharacterBuilder} */
  setHairColor(color) {
    throw new Error("Not implemented");
  }
  /** @returns {CharacterBuilder} */
  setEyeColor(color) {
    throw new Error("Not implemented");
  }
  /** @returns {CharacterBuilder} */
  addOutfit(item) {
    throw new Error("Not implemented");
  }
  /** @returns {CharacterBuilder} */
  addInventory(item) {
    throw new Error("Not implemented");
  }
  /** @returns {CharacterBuilder} */
  addDeed(deed) {
    throw new Error("Not implemented");
  }
  /** @returns {Character} */
  build() {
    throw new Error("Not implemented");
  }
}

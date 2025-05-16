import { CharacterBuilder } from "./builder.js";

/**
 * Builds a heroic character step-by-step.
 * @implements {CharacterBuilder}
 */
export class HeroBuilder {
  constructor() {
    /** @private @type {Partial<import("./builder.js").Character>} */
    this._char = { outfit: [], inventory: [], deeds: [] };
  }

  setName(name) {
    this._char.name = name;
    return this;
  }
  setHeight(cm) {
    this._char.height = cm;
    return this;
  }
  setBuild(build) {
    this._char.build = build;
    return this;
  }
  setHairColor(color) {
    this._char.hairColor = color;
    return this;
  }
  setEyeColor(color) {
    this._char.eyeColor = color;
    return this;
  }
  addOutfit(item) {
    if (!this._char.outfit) {
      this._char.outfit = [];
    }
    this._char.outfit.push(item);
    return this;
  }
  addInventory(item) {
    if (!this._char.inventory) {
      this._char.inventory = [];
    }
    this._char.inventory.push(item);
    return this;
  }
  addDeed(deed) {
    if (!this._char.deeds) {
      this._char.deeds = [];
    }
    this._char.deeds.push(deed);
    return this;
  }
  build() {
    return /** @type {import("./builder.js").Character} */ (this._char);
  }
}

import { CharacterBuilder } from "./builder.js";

/**
 * Director to orchestrate builder usage.
 */
export class CharacterDirector {
  /**
   * @param {CharacterBuilder} builder
   */
  constructor(builder) {
    this.builder = builder;
  }

  /**
   * Constructs a full character example.
   * @returns {import("./builder.js").Character}
   */
  construct() {
    return this.builder
      .setName("Aria Swiftblade")
      .setHeight(170)
      .setBuild("Athletic")
      .setHairColor("Golden")
      .setEyeColor("Emerald")
      .addOutfit("Leather Armor")
      .addOutfit("Cloak of Light")
      .addInventory("Sword of Dawn")
      .addInventory("Healing Potion")
      .addDeed("Saved the village")
      .addDeed("Defeated the dragon")
      .build();
  }
}

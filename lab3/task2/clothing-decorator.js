import { HeroDecorator } from "./hero-decorator.js";

/**
 * Clothing decorator increases defense.
 */
export class ClothingDecorator extends HeroDecorator {
  /**
   * @param {import("./types.js").IHero} hero - The hero to decorate.
   * @param {number} defenseBonus - Bonus defense provided by clothing.
   */
  constructor(hero, defenseBonus) {
    super(hero);
    this.defenseBonus = defenseBonus;
  }

  /**
   * @override
   * @returns {{health: number, attack: number, defense: number, magic: number}}
   */
  getStats() {
    const stats = super.getStats();
    stats.defense += this.defenseBonus;
    return stats;
  }

  /**
   * @override
   * @returns {string}
   */
  getDescription() {
    return `${super.getDescription()} wearing clothing (+${this.defenseBonus} DEF)`;
  }
}

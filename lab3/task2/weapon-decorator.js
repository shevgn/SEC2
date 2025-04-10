import { HeroDecorator } from "./hero-decorator.js";

/**
 * Weapon decorator increases attack.
 */
export class WeaponDecorator extends HeroDecorator {
  /**
   * @param {import("./types.js").IHero} hero - The hero to decorate.
   * @param {number} attackBonus - Bonus attack provided by weapon.
   */
  constructor(hero, attackBonus) {
    super(hero);
    this.attackBonus = attackBonus;
  }

  /**
   * @override
   * @returns {{health: number, attack: number, defense: number, magic: number}}
   */
  getStats() {
    const stats = super.getStats();
    stats.attack += this.attackBonus;
    return stats;
  }

  /**
   * @override
   * @returns {string}
   */
  getDescription() {
    return `${super.getDescription()} wielding a weapon (+${this.attackBonus} ATK)`;
  }
}

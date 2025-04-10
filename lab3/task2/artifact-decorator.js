import { HeroDecorator } from "./hero-decorator.js";

/**
 * Artifact decorator increases magic power.
 */
export class ArtifactDecorator extends HeroDecorator {
  /**
   * @param {import("./types.js").IHero} hero - The hero to decorate.
   * @param {number} magicBonus - Bonus magic provided by artifact.
   */
  constructor(hero, magicBonus) {
    super(hero);
    this.magicBonus = magicBonus;
  }

  /**
   * @override
   * @returns {{health: number, attack: number, defense: number, magic: number}}
   */
  getStats() {
    const stats = super.getStats();
    stats.magic += this.magicBonus;
    return stats;
  }

  /**
   * @override
   * @returns {string}
   */
  getDescription() {
    return `${super.getDescription()} empowered by an artifact (+${this.magicBonus} MAG)`;
  }
}

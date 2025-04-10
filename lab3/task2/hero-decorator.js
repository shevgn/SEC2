import * as Types from "./types.js";

/**
 * Abstract decorator for a Hero.
 * @implements {Types.IHero}
 */
export class HeroDecorator {
  /**
   * @param {Types.IHero} hero - The hero to decorate.
   */
  constructor(hero) {
    this.hero = hero;
  }

  /**
   * Returns the decorated hero's stats.
   * @returns {{health: number, attack: number, defense: number, magic: number}}
   */
  getStats() {
    return this.hero.getStats();
  }

  /**
   * Returns the decorated hero's description.
   * @returns {string}
   */
  getDescription() {
    return this.hero.getDescription();
  }
}

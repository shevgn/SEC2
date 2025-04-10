/**
 * Base Hero class.
 */
export class Hero {
  /**
   * @param {string} name - The hero's name.
   * @param {string} role - The hero's role.
   * @param {number} health - Base health.
   * @param {number} attack - Base attack.
   * @param {number} defense - Base defense.
   * @param {number} magic - Base magic power.
   */
  constructor(name, role, health, attack, defense, magic) {
    this.name = name;
    this.role = role;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.magic = magic;
  }

  /**
   * Returns the hero's stats.
   * @returns {{health: number, attack: number, defense: number, magic: number}}
   */
  getStats() {
    return {
      health: this.health,
      attack: this.attack,
      defense: this.defense,
      magic: this.magic,
    };
  }

  /**
   * Returns a description of the hero.
   * @returns {string}
   */
  getDescription() {
    return `${this.name} the ${this.role}`;
  }
}

/**
 * Warrior class.
 */
export class Warrior extends Hero {
  /**
   * @param {string} name
   */
  constructor(name) {
    // Warrior: високі показники здоров'я і атаки, середній захист, низька магія
    super(name, "Warrior", 120, 20, 15, 0);
  }
}

/**
 * Mage class.
 */
export class Mage extends Hero {
  /**
   * @param {string} name
   */
  constructor(name) {
    // Mage: низький захист, висока магія, помірна атака
    super(name, "Mage", 80, 5, 10, 25);
  }
}

/**
 * Paladin class.
 */
export class Paladin extends Hero {
  /**
   * @param {string} name
   */
  constructor(name) {
    // Paladin: збалансовані характеристики з акцентом на захист і невелику магію
    super(name, "Paladin", 100, 15, 20, 10);
  }
}

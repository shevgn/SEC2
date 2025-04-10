import { ArtifactDecorator } from "./artifact-decorator.js";
import { ClothingDecorator } from "./clothing-decorator.js";
import { Hero, Mage, Paladin, Warrior } from "./heros.js";
import { WeaponDecorator } from "./weapon-decorator.js";

(function main() {
  /** @type {Hero} */
  const warrior = new Warrior("Conan");
  /** @type {Hero} */
  const mage = new Mage("Merlin");
  /** @type {Hero} */
  const paladin = new Paladin("Arthur");

  console.log("=== Original Heroes ===");
  console.log(warrior.getDescription(), warrior.getStats());
  console.log(mage.getDescription(), mage.getStats());
  console.log(paladin.getDescription(), paladin.getStats());

  const decoratedWarrior = new ArtifactDecorator(
    new WeaponDecorator(
      new ClothingDecorator(warrior, 5), // +5 defense from clothing
      10, // +10 attack from weapon
    ),
    3, // +3 magic from artifact
  );

  const decoratedMage = new ClothingDecorator(
    new ArtifactDecorator(mage, 8), // +8 magic bonus from artifact
    2, // +2 defense from clothing
  );

  const decoratedPaladin = new WeaponDecorator(
    new ClothingDecorator(
      new ArtifactDecorator(paladin, 4), // +4 magic bonus from artifact
      3, // +3 defense from clothing
    ),
    7, // +7 attack bonus from weapon
  );

  console.log("\n=== Decorated Heroes ===");
  console.log(decoratedWarrior.getDescription(), decoratedWarrior.getStats());
  console.log(decoratedMage.getDescription(), decoratedMage.getStats());
  console.log(decoratedPaladin.getDescription(), decoratedPaladin.getStats());
})();

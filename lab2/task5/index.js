import { CharacterDirector } from "./director.js";
import { EnemyBuilder } from "./enemy-builder.js";
import { HeroBuilder } from "./hero-builder.js";

const heroDirector = new CharacterDirector(new HeroBuilder());
const hero = heroDirector.construct();
console.log("Hero:", hero);

const enemyDirector = new CharacterDirector(new EnemyBuilder());
const enemy = enemyDirector.builder
  .setName("Morgath the Cruel")
  .setHeight(190)
  .setBuild("Burly")
  .setHairColor("Black")
  .setEyeColor("Red")
  .addOutfit("Spiked Armor")
  .addInventory("Axe of Despair")
  .addDeed("Conquered the realm")
  .addDeed("Imprisoned the king")
  .build();
console.log("Enemy:", enemy);

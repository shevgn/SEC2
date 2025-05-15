/**
 * @typedef {Object} VirusProps
 * @property {string} name
 * @property {number} age
 * @property {number} weight
 * @property {string} type
 */

class Virus {
  /**
   * @param {VirusProps} props
   */
  constructor({ name, age, weight, type }) {
    /** @type {string} */ this.name = name;
    /** @type {number} */ this.age = age;
    /** @type {number} */ this.weight = weight;
    /** @type {string} */ this.type = type;
    /** @type {Virus[]} */ this.children = [];
  }

  /**
   * @param {Virus} child
   * @returns {void}
   */
  addChild(child) {
    this.children.push(child);
  }

  /**
   * @returns {Virus}
   */
  clone() {
    const copy = new Virus({
      name: this.name,
      age: this.age,
      weight: this.weight,
      type: this.type,
    });

    for (const child of this.children) {
      copy.addChild(child.clone());
    }

    return copy;
  }

  /**
   * @param {number} level
   */
  printTree(level = 0) {
    console.log(
      `${"  ".repeat(level)}- ${this.name} [age=${this.age}, weight=${this.weight}, type=${this.type}]`,
    );
    for (const child of this.children) {
      child.printTree(level + 1);
    }
  }
}

// ------------------ DEMO ------------------
(function main() {
  const root = new Virus({
    name: "RootVirus",
    age: 5,
    weight: 1.2,
    type: "Alpha",
  });

  const child1 = new Virus({
    name: "ChildA",
    age: 3,
    weight: 0.8,
    type: "Beta",
  });
  const child2 = new Virus({
    name: "ChildB",
    age: 2,
    weight: 0.6,
    type: "Beta",
  });

  const grandChild1 = new Virus({
    name: "GrandA1",
    age: 1,
    weight: 0.4,
    type: "Gamma",
  });
  const grandChild2 = new Virus({
    name: "GrandA2",
    age: 1,
    weight: 0.5,
    type: "Gamma",
  });

  child1.addChild(grandChild1);
  child1.addChild(grandChild2);
  root.addChild(child1);
  root.addChild(child2);

  console.log("--- Original Virus Tree ---");
  root.printTree();

  const clonedRoot = root.clone();
  console.log("\n--- Cloned Virus Tree ---");
  clonedRoot.printTree();

  console.log("\nCheck distinct instances:");
  console.log("root !== clonedRoot:", root !== clonedRoot);
  console.log(
    "root.children[0] !== clonedRoot.children[0]:",
    root.children[0] !== clonedRoot.children[0],
  );
})();

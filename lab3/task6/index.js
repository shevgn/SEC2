import { memoryUsage } from "process";

/**
 * Base class for LightHTML nodes.
 */
class LightNode {
  /**
   * Returns the outer HTML representation of this node.
   * @returns {string}
   */
  outerHTML() {
    throw new Error("Method 'outerHTML()' must be implemented.");
  }

  /**
   * Returns the inner HTML representation of this node.
   * @returns {string}
   */
  innerHTML() {
    throw new Error("Method 'innerHTML()' must be implemented.");
  }
}

/**
 * Represents a text node in LightHTML.
 * @extends {LightNode}
 */
class LightTextNode extends LightNode {
  /**
   * @param {string} text - The text content.
   */
  constructor(text) {
    super();
    this.text = text;
  }

  /**
   * Returns the text itself.
   * @returns {string}
   */
  outerHTML() {
    return this.text;
  }

  /**
   * Returns the text itself.
   * @returns {string}
   */
  innerHTML() {
    return this.text;
  }
}

/**
 * Represents an element node in LightHTML.
 * @extends {LightNode}
 */
class LightElementNodeNoFlyweight extends LightNode {
  /**
   * @param {string} tagName - The tag name (e.g., 'div', 'ul', 'li').
   * @param {Object} [options] - Options for the element.
   * @param {string} [options.display='block'] - Display type ('block' or 'inline').
   * @param {string} [options.closingType='normal'] - 'normal' for elements with closing tags or 'self-closing' for tags like <img/>.
   * @param {string[]} [options.classes=[]] - Array of CSS class names.
   */
  constructor(tagName, options = {}) {
    super();
    this.tagName = tagName;
    this.display = options.display || "block";
    this.closingType = options.closingType || "normal";
    this.classes = options.classes || [];
    /** @type {LightNode[]} */
    this.children = [];
  }

  /**
   * Adds a child node.
   * @param {LightNode} node
   * @returns {void}
   */
  addChild(node) {
    this.children.push(node);
  }

  /**
   * Returns the inner HTML by concatenating the outerHTML of all child nodes.
   * @returns {string}
   */
  innerHTML() {
    return this.children.map((child) => child.outerHTML()).join("");
  }

  /**
   * Returns the outer HTML representation of the element.
   * If the element is self-closing, only the opening tag is returned.
   * @returns {string}
   */
  outerHTML() {
    const classAttr =
      this.classes.length > 0 ? ` class="${this.classes.join(" ")}"` : "";
    if (this.closingType === "self-closing") {
      return `<${this.tagName}${classAttr} />`;
    } else {
      return `<${this.tagName}${classAttr}>${this.innerHTML()}</${this.tagName}>`;
    }
  }

  /**
   * Returns the number of child nodes.
   * @returns {number}
   */
  get childCount() {
    return this.children.length;
  }
}

/**
 * @param {string} text
 * @returns {LightElementNodeNoFlyweight}
 */
function parseTextToLightHTML_NoFlyweight(text) {
  const lines = text.split(/\r?\n/);
  const container = new LightElementNodeNoFlyweight("div", {
    classes: ["content"],
  });
  lines.forEach((line, index) => {
    let tag;
    if (index === 0) {
      tag = "h1";
    } else if (line.trim().length !== 0 && line.trim().length < 20) {
      tag = "h2";
    } else if (/^\s/.test(line)) {
      tag = "blockquote";
    } else {
      tag = "p";
    }
    const element = new LightElementNodeNoFlyweight(tag, {
      closingType: "normal",
    });
    element.addChild(new LightTextNode(line));
    container.addChild(element);
  });
  return container;
}

class LightElementFlyweightFactory {
  constructor() {
    /** @type {Object.<string, Object>} */
    this.cache = {};
  }
  /**
   * @param {string} tagName
   * @param {string} display
   * @param {string} closingType
   * @param {string[]} classes
   * @returns {Object}
   */
  getFlyweight(tagName, display, closingType, classes) {
    const key = `${tagName}|${display}|${closingType}|${classes.join(",")}`;
    if (!this.cache[key]) {
      this.cache[key] = { tagName, display, closingType, classes };
    }
    return this.cache[key];
  }
}
const lightElementFlyweightFactory = new LightElementFlyweightFactory();

class LightElementNode extends LightNode {
  /**
   * @param {string} tagName
   * @param {Object} [options]
   * @param {string} [options.display='block']
   * @param {string} [options.closingType='normal']
   * @param {string[]} [options.classes=[]]
   */
  constructor(tagName, options = {}) {
    super();
    const display = options.display || "block";
    const closingType = options.closingType || "normal";
    const classes = options.classes || [];
    this.flyweight = lightElementFlyweightFactory.getFlyweight(
      tagName,
      display,
      closingType,
      classes,
    );
    /** @type {LightNode[]} */
    this.children = [];
  }
  addChild(node) {
    this.children.push(node);
  }
  innerHTML() {
    return this.children.map((child) => child.outerHTML()).join("");
  }
  outerHTML() {
    const classAttr =
      this.flyweight.classes.length > 0
        ? ` class="${this.flyweight.classes.join(" ")}"`
        : "";
    if (this.flyweight.closingType === "self-closing") {
      return `<${this.flyweight.tagName}${classAttr} />`;
    } else {
      return `<${this.flyweight.tagName}${classAttr}>${this.innerHTML()}</${this.flyweight.tagName}>`;
    }
  }
  get childCount() {
    return this.children.length;
  }
}

/**
 * @param {string} text
 * @returns {LightElementNode}
 */
function parseTextToLightHTML(text) {
  const lines = text.split(/\r?\n/);
  const container = new LightElementNode("div", { classes: ["content"] });
  lines.forEach((line, index) => {
    let tag;
    if (index === 0) {
      tag = "h1";
    } else if (line.trim().length && line.trim().length < 20) {
      tag = "h2";
    } else if (/^\s/.test(line)) {
      tag = "blockquote";
    } else {
      tag = "p";
    }
    const element = new LightElementNode(tag, { closingType: "normal" });
    element.addChild(new LightTextNode(line));
    container.addChild(element);
  });
  return container;
}

/**
 * @returns {number}
 */
function getMemoryUsage() {
  return memoryUsage().heapUsed;
}

(async function main() {
  const url = "https://www.gutenberg.org/cache/epub/1513/pg1513.txt";

  let bookText = "";
  try {
    console.log(`Fetching text from ${url}...`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    bookText = await response.text();
  } catch (error) {
    console.error(`Error fetching text: ${error.message}`);
  }

  if (global.gc) {
    global.gc();
  }
  const memBefore_NoFlyweight = getMemoryUsage();
  const tree_NoFlyweight = parseTextToLightHTML_NoFlyweight(bookText);
  if (global.gc) {
    global.gc();
  }
  const memAfter_NoFlyweight = getMemoryUsage();
  const memoryUsed_NoFlyweight = memAfter_NoFlyweight - memBefore_NoFlyweight;

  console.log("=== Without Flyweight ===");
  console.log(tree_NoFlyweight.outerHTML());
  console.log(`Memory used (approx.): ${memoryUsed_NoFlyweight} bytes\n`);

  if (global.gc) {
    global.gc();
  }
  const memBefore_Flyweight = getMemoryUsage();
  const tree_Flyweight = parseTextToLightHTML(bookText);
  if (global.gc) {
    global.gc();
  }
  const memAfter_Flyweight = getMemoryUsage();
  const memoryUsed_Flyweight = memAfter_Flyweight - memBefore_Flyweight;

  console.log("=== With Flyweight ===");
  console.log(tree_Flyweight.outerHTML());
  console.log(`Memory used (approx.): ${memoryUsed_Flyweight} bytes\n`);

  const flyweightCount = Object.keys(lightElementFlyweightFactory.cache).length;
  console.log(`Flyweight objects count: ${flyweightCount}`);
})();

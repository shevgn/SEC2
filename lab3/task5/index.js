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
class LightElementNode extends LightNode {
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
      return `<${this.tagName}${classAttr}>\n${this.innerHTML()}\n</${this.tagName}>\n`;
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

(function main() {
  const ul = new LightElementNode("ul", {
    classes: ["my-list"],
    display: "block",
    closingType: "normal",
  });

  for (let i = 1; i <= 3; i++) {
    const li = new LightElementNode("li", {
      classes: ["list-item"],
      display: "block",
      closingType: "normal",
    });
    li.addChild(new LightTextNode(`Item ${i}`));
    ul.addChild(li);
  }

  console.log("OuterHTML of the ul element:");
  console.log(ul.outerHTML());

  console.log("\nInnerHTML of the ul element:");
  console.log(ul.innerHTML());
})();

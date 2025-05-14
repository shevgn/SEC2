import { LightNode } from "./node.js";

/**
 * Represents a text node in LightHTML.
 * @extends {LightNode}
 */
export class LightTextNode extends LightNode {
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

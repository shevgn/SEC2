import { LightNode } from "./node.js";

/**
 * @typedef {(...args: any[]) => void} EventCallback
 */

/**
 * Represents an element node in LightHTML.
 * @extends {LightNode}
 */
export class LightElementNode extends LightNode {
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
    /** @private @type {Object.<string, EventCallback[]>} */
    this._listeners = {};
  }

  /**
   * Add an event listener for the specified event type.
   * @param {string} type - Event name (e.g. "click").
   * @param {EventCallback} callback - Handler function.
   * @returns {void}
   */
  addEventListener(type, callback) {
    if (!this._listeners[type]) {
      this._listeners[type] = [];
    }
    this._listeners[type].push(callback);
  }

  /**
   * Remove an event listener for the specified event type.
   * @param {string} type
   * @param {EventCallback} callback
   * @returns {void}
   */
  removeEventListener(type, callback) {
    const cbs = this._listeners[type];
    if (!cbs) return;
    this._listeners[type] = cbs.filter((fn) => fn !== callback);
  }

  /**
   * Dispatch an event to all listeners of the given type.
   * @param {string} type - Event name.
   * @param {any} eventObj - Optional event data.
   * @returns {void}
   */
  dispatchEvent(type, eventObj = null) {
    const cbs = this._listeners[type] || [];
    for (const fn of cbs) {
      fn.call(this, eventObj);
    }
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

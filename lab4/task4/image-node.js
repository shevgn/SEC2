import { ImageLoader } from "./image-loader.js";
import { LightNode } from "./node.js";

/**
 * LightImageNode represents an <img> element in LightHTML.
 * @extends LightNode
 */
export class LightImageNode extends LightNode {
  /**
   * @param {string} href - Image source (file path or URL).
   * @param {ImageLoader} loader - Strategy for loading the image.
   * @param {Object} [options]
   * @param {string[]} [options.classes=[]]
   * @param {string} [options.alt=""]
   */
  constructor(href, loader, options = {}) {
    super();
    this.href = href;
    this.loader = loader;
    this.classes = options.classes || [];
    this.alt = options.alt || "";
  }

  /**
   * Loads the image data using the chosen strategy.
   * @returns {Promise<Buffer|ArrayBuffer>}
   */
  async load() {
    return await this.loader.load(this.href);
  }

  /**
   * Returns an HTML string for demonstration.
   * @returns {string}
   */
  outerHTML() {
    const cls = this.classes.length ? ` class="${this.classes.join(" ")}"` : "";
    return `<img src="${this.href}" alt="${this.alt}"${cls} />`;
  }

  innerHTML() {
    return "";
  }
}

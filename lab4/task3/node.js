/**
 * Base class for LightHTML nodes.
 */
export class LightNode {
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

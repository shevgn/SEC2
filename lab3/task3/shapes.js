import { Renderer } from "./renderers.js";

/**
 * Base abstract class Shape.
 */
export class Shape {
  /**
   * @param {Renderer} renderer - The renderer to use for rendering the shape.
   */
  constructor(renderer) {
    /** @protected */
    this.renderer = renderer;
  }

  /**
   * Returns the name of the shape.
   * @abstract
   * @returns {string}
   */
  getName() {
    throw new Error("Abstract method 'getName' must be implemented");
  }

  /**
   * Renders the shape using the provided renderer.
   * @returns {void}
   */
  render() {
    this.renderer.render(this.getName());
  }
}

/**
 * Circle shape.
 * @extends {Shape}
 */
export class Circle extends Shape {
  /**
   * @override
   * @returns {string}
   */
  getName() {
    return "Circle";
  }
}

/**
 * Square shape.
 * @extends {Shape}
 */
export class Square extends Shape {
  /**
   * @override
   * @returns {string}
   */
  getName() {
    return "Square";
  }
}

/**
 * Triangle shape.
 * @extends {Shape}
 */
export class Triangle extends Shape {
  /**
   * @override
   * @returns {string}
   */
  getName() {
    return "Triangle";
  }
}

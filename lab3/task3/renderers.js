/**
 * Renderer interface.
 * @interface
 */
export class Renderer {
  /**
   * Render a shape.
   * @param {string} shapeName - The name of the shape.
   * @returns {void}
   */
  render(shapeName) {
    throw new Error("Not implemented");
  }
}

/**
 * Renders shapes as vector graphics.
 * @implements {Renderer}
 */
export class VectorRenderer extends Renderer {
  /**
   * Render the shape as vector graphics.
   * @param {string} shapeName
   * @returns {void}
   */
  render(shapeName) {
    console.log(`Drawing ${shapeName} as vector graphics`);
  }
}

/**
 * Renders shapes as raster (pixel-based) graphics.
 * @implements {Renderer}
 */
export class RasterRenderer extends Renderer {
  /**
   * Render the shape as pixels.
   * @param {string} shapeName
   * @returns {void}
   */
  render(shapeName) {
    console.log(`Drawing ${shapeName} as pixels`);
  }
}

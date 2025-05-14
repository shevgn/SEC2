/**
 * @interface ImageLoader
 */
export class ImageLoader {
  /**
   * Load an image and return its data (as a Buffer or string).
   * @param {string} href
   * @returns {Promise<Buffer|ArrayBuffer>}
   */
  load(href) {
    throw new Error("load() must be implemented");
  }
}

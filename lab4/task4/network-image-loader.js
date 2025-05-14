import { ImageLoader } from "./image-loader.js";

/**
 * @implements {ImageLoader}
 */
export class NetworkImageLoader extends ImageLoader {
  /**
   * @override
   * @param {string} href
   */
  async load(href) {
    const res = await fetch(href);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return await res.arrayBuffer();
  }
}

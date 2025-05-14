import { readFile } from "fs/promises";
import { ImageLoader } from "./image-loader.js";

/**
 * @implements {ImageLoader}
 */
export class FileSystemImageLoader extends ImageLoader {
  /**
   * @override
   * @param {string} href
   * */
  async load(href) {
    return await readFile(href);
  }
}

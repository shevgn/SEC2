import * as fs from "fs";

export class FileWriter {
  /**
   * @property {string} filePath
   */
  filePath;

  /**
   * @constructor
   * @param {string} filePath
   */
  constructor(filePath) {
    this.filePath = filePath;
    fs.writeFileSync(this.filePath, "");
  }

  /**
   * @param {string} message
   * @returns {void}
   */
  write(message) {
    fs.appendFileSync(this.filePath, message);
  }

  /**
   * @param {string} message
   * @returns {void}
   */
  writeLine(message) {
    this.write(message + "\n");
  }
}

import { FileWriter } from "./file-writer.js";

export class FileLogger {
  /**
   * @property {FileWriter} fileWriter
   */
  fileWriter;

  /**
   * @constructor
   * @param {string} filePath
   */
  constructor(filePath) {
    this.fileWriter = new FileWriter(filePath);
  }

  /**
   * @param {string} message
   * @returns {void}
   */
  log(message) {
    this.fileWriter.writeLine(`[LOG] ${message}`);
  }

  /**
   * @param {string} message
   * @returns {void}
   */
  error(message) {
    this.fileWriter.writeLine(`[ERROR] ${message}`);
  }

  /**
   * @param {string} message
   * @returns {void}
   */
  warn(message) {
    this.fileWriter.writeLine(`[WARN] ${message}`);
  }
}

export class Logger {
  /**
   * @param {string} message
   * @returns {void}
   */
  log(message) {
    console.log("\x1b[32m%s\x1b[0m", message);
  }

  /**
   * @param {string} message
   * @returns {void}
   */
  error(message) {
    console.log("\x1b[31m%s\x1b[0m", message);
  }

  /**
   * @param {string} message
   * @returns {void}
   */
  warn(message) {
    console.log("\x1b[33m%s\x1b[0m", message);
  }
}

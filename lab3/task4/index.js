import { readFileSync } from "fs";

/**
 *  @interface
 *  @typedef SmartTextReaderInterface
 *  @property {function(string): string[][]} read
 */

/**
 * SmartTextReader reads the content of a text file and converts it into a two-dimensional array.
 * Each element of the outer array corresponds to a line in the file, and the inner arrays contain individual characters.
 * @implements {SmartTextReaderInterface}
 */
class SmartTextReader {
  /**
   * Reads the specified file and converts its content into a 2D array.
   * @param {string} filePath - The path to the text file.
   * @returns {string[][]} 2D array of characters.
   */
  read(filePath) {
    const data = readFileSync(filePath, "utf-8");
    const lines = data.split(/\r?\n/);
    return lines.map((line) => line.split(""));
  }
}

/**
 * SmartTextReaderLogger acts as a proxy for SmartTextReader, logging file operations.
 * @implements {SmartTextReaderInterface}
 */
class SmartTextReaderLogger {
  /**
   * @param {SmartTextReaderInterface} reader - The SmartTextReader instance to wrap.
   */
  constructor(reader) {
    this.reader = reader;
  }

  /**
   * Reads a file while logging operations such as opening, successful reading (including total lines and characters), and closing.
   * @param {string} filePath - The path to the text file.
   * @returns {string[][]} 2D array of characters.
   */
  read(filePath) {
    console.log(`Opening file: ${filePath}`);
    let result;
    try {
      result = this.reader.read(filePath);
      const totalLines = result.length;
      const totalChars = result.reduce((sum, line) => sum + line.length, 0);
      console.log(
        `File read successfully. Total lines: ${totalLines}, Total characters: ${totalChars}`,
      );
    } catch (error) {
      console.error(`Error reading file: ${error.message}`);
      throw error;
    } finally {
      console.log(`Closing file: ${filePath}`);
    }
    return result;
  }
}

/**
 * SmartTextReaderLocker acts as a proxy for SmartTextReader by restricting access to files whose path matches a provided regular expression.
 * @implements {SmartTextReaderInterface}
 */
class SmartTextReaderLocker {
  /**
   * @param {SmartTextReaderInterface} reader - The SmartTextReader instance to wrap.
   * @param {RegExp} restrictedPattern - The regular expression defining restricted file paths.
   */
  constructor(reader, restrictedPattern) {
    this.reader = reader;
    this.restrictedPattern = restrictedPattern;
  }

  /**
   * Reads a file if its path does not match the restricted pattern; otherwise, logs "Access denied!".
   * @param {string} filePath - The path to the text file.
   * @returns {string[][]} 2D array of characters, or null if access is denied.
   */
  read(filePath) {
    if (this.restrictedPattern.test(filePath)) {
      console.log("Access denied!");
      return Array.from({ length: 0 }, () => []);
    }
    return this.reader.read(filePath);
  }
}

(function main() {
  const filePath = "/Users/artemlevchenko/Code/SE/lab3/task4/example.txt";
  const reader = new SmartTextReader();

  console.log("=== Basic SmartTextReader ===");
  try {
    const result = reader.read(filePath);
    console.log("2D Array:", result);
  } catch (error) {
    console.error(error);
  }

  console.log("\n=== Using Logger Proxy (SmartTextReaderLogger) ===");
  const loggerProxy = new SmartTextReaderLogger(reader);
  try {
    const resultLogger = loggerProxy.read(filePath);
    console.log("2D Array:", resultLogger);
  } catch (error) {
    console.error(error);
  }

  console.log("\n=== Using Locker Proxy (SmartTextReaderLocker) ===");
  const lockerProxy = new SmartTextReaderLocker(reader, /restricted/);

  const restrictedFilePath =
    "/Users/artemlevchenko/Code/SE/lab3/task4/restricted_file.txt";
  console.log(`Attempting to read restricted file: ${restrictedFilePath}`);
  const resultLocker = lockerProxy.read(restrictedFilePath);
  console.log("Result:", resultLocker);
})();

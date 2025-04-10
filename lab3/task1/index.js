import { Logger } from "./logger.js";
import { FileLogger } from "./file-logger-adapter.js";

const consoleLogger = new Logger();
consoleLogger.log("This is a log message.");
consoleLogger.error("This is an error message.");
consoleLogger.warn("This is a warning message.");

const fileLogger = new FileLogger("log.txt");
fileLogger.log("This is a log message written to file.");
fileLogger.error("This is an error message written to file.");
fileLogger.warn("This is a warning message written to file.");

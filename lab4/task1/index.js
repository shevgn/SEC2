/**
 * @typedef {import('readline').Interface} ReadlineInterface
 */

import { createInterface } from "readline";

class SupportHandler {
  /**
   * @param {SupportHandler|null} nextHandler
   */
  constructor(nextHandler = null) {
    /** @protected */ this.nextHandler = nextHandler;
  }

  /**
   * @param {string} input
   * @param {ReadlineInterface} rl
   */
  handle(input, rl) {
    if (this.canHandle(input)) {
      this.process(input);
      rl.close();
    } else if (this.nextHandler) {
      this.nextHandler.handle(input, rl);
    } else {
      console.log(
        "Не знайдено відповідного рівня підтримки. Повторюємо меню...\n",
      );
      rl.close();
      startMenu();
    }
  }

  /**
   * @abstract
   * @param {string} input
   * @returns {boolean}
   */
  canHandle(input) {
    throw new Error("canHandle має бути реалізовано в підкласі");
  }

  /**
   * @abstract
   * @param {string} input
   */
  process(input) {
    throw new Error("process має бути реалізовано в підкласі");
  }
}

class Level1Handler extends SupportHandler {
  canHandle(input) {
    return input === "1";
  }
  process() {
    console.log(
      "Ви обрали загальну підтримку (Level 1). З’єднуємо з оператором загальних питань.",
    );
  }
}

class Level2Handler extends SupportHandler {
  canHandle(input) {
    return input === "2";
  }
  process() {
    console.log(
      "Ви обрали технічну підтримку (Level 2). З’єднуємо з технічним фахівцем.",
    );
  }
}

class Level3Handler extends SupportHandler {
  canHandle(input) {
    return input === "3";
  }
  process() {
    console.log(
      "Ви обрали фінансову підтримку (Level 3). З’єднуємо з бухгалтерією.",
    );
  }
}

class Level4Handler extends SupportHandler {
  canHandle(input) {
    return input === "4";
  }
  process() {
    console.log(
      "Ви обрали VIP-підтримку (Level 4). З’єднуємо з персональним менеджером.",
    );
  }
}

function startMenu() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Ласкаво просимо в систему підтримки!");
  console.log("Оберіть тип підтримки:");
  console.log("1 — Загальні питання");
  console.log("2 — Технічна підтримка");
  console.log("3 — Фінансові питання");
  console.log("4 — VIP-підтримка");
  rl.question("Ваш вибір: ", (answer) => {
    const handlerChain = new Level1Handler(
      new Level2Handler(new Level3Handler(new Level4Handler(null))),
    );
    handlerChain.handle(answer.trim(), rl);
  });
}

startMenu();

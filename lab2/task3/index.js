/**
 * @typedef {Object} AuthConfig
 * @property {string} [strategy] e.g. 'oauth', 'jwt'
 */

/**
 * @class Authenticator
 * @description
 * Thread-safe Singleton: only one instance can ever be created.
 * Uses a private static field to hold the instance.
 */
class Authenticator {
  /**
   * @type {Authenticator|null}
   */
  static #instance = null;

  /**
   * @type {boolean}
   */
  static #initializing = false;

  /**
   * @type {AuthConfig}
   */
  #config;

  /**
   * @private
   * The constructor is private—calls from outside will throw.
   * @param {AuthConfig} config
   */
  constructor(config) {
    if (!Authenticator.#initializing) {
      throw new Error(
        "Use Authenticator.getInstance() to create the singleton",
      );
    }
    this.#config = config;
  }

  /**
   * Returns the singleton instance, creating it if necessary.
   * @param {AuthConfig} [config]
   * @returns {Authenticator}
   */
  static getInstance(config = {}) {
    if (Authenticator.#instance) {
      return Authenticator.#instance;
    }
    Authenticator.#initializing = true;
    Authenticator.#instance = new Authenticator(config);
    Authenticator.#initializing = false;
    return Authenticator.#instance;
  }

  /**
   * Example authentication method.
   * @param {string} user
   * @param {string} pass
   * @returns {boolean}
   */
  authenticate(user, pass) {
    console.log(
      `Authenticating ${user} with strategy "${this.#config.strategy || "default"}"`,
    );
    return user === "admin" && pass === "password";
  }
}

// ---------------- DEMO ----------------
(async () => {
  const [auth1, auth2] = await Promise.all([
    Promise.resolve().then(() =>
      Authenticator.getInstance({ strategy: "jwt" }),
    ),
    Promise.resolve().then(() =>
      Authenticator.getInstance({ strategy: "oauth" }),
    ),
  ]);

  console.log("Same instance? ", auth1 === auth2);
  console.log("Strategy used:", auth1.authenticate("admin", "password"));
})();

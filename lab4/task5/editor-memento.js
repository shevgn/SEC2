/**
 * Stores a snapshot of TextDocument’s state.
 * Immutable from outside.
 */
export class EditorMemento {
  constructor(text) {
    this._state = text;
    Object.freeze(this);
  }

  /** Only TextDocument can access */
  getState() {
    return this._state;
  }
}

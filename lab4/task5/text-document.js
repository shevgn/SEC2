import { EditorMemento } from "./editor-memento.js";

/**
 * Holds the document text and can save/restore its state.
 */
export class TextDocument {
  constructor(text = "") {
    this._text = text;
  }

  /** Get current text */
  getText() {
    return this._text;
  }

  /** Set new text */
  setText(newText) {
    this._text = newText;
  }

  /**
   * Creates a memento capturing current state.
   * @returns {EditorMemento}
   */
  save() {
    return new EditorMemento(this._text);
  }

  /**
   * Restores state from a memento.
   * @param {EditorMemento} memento
   */
  restore(memento) {
    this._text = memento.getState();
  }
}

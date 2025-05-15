/**
 * Manages saving/restoring document states without peeking inside mementos.
 */
export class TextEditor {
  constructor(doc) {
    this._document = doc;
    this._history = [];
  }

  /** Save current document state onto history stack */
  save() {
    console.log("Saving state:", this._document.getText());
    this._history.push(this._document.save());
  }

  /** Undo to last saved state */
  undo() {
    if (!this._history.length) {
      console.log("Nothing to undo.");
      return;
    }
    const memento = this._history.pop();
    this._document.restore(memento);
    console.log("State after undo:", this._document.getText());
  }

  /** Get current text */
  getText() {
    return this._document.getText();
  }

  /** Update document text */
  setText(text) {
    this._document.setText(text);
  }
}

import { TextDocument } from "./text-document.js";
import { TextEditor } from "./text-editor.js";

(function main() {
  const doc = new TextDocument("Hello");
  const editor = new TextEditor(doc);

  console.log("Initial text:", editor.getText()); // Hello

  editor.save();
  editor.setText("Hello, world!");
  console.log("After edit:", editor.getText()); // Hello, world!

  editor.save();
  editor.setText("Hello, world! How are you?");
  console.log("After second edit:", editor.getText());

  editor.undo(); // Restores to "Hello, world!"
  editor.undo(); // Restores to "Hello"
  editor.undo();
})();

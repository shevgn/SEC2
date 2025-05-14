import { LightElementNode } from "./element-node.js";
import { LightTextNode } from "./text-node.js";

(function main() {
  const ul = new LightElementNode("ul", {
    classes: ["my-list"],
    display: "block",
    closingType: "normal",
  });

  for (let i = 1; i <= 3; i++) {
    const li = new LightElementNode("li", {
      classes: ["list-item"],
      display: "block",
      closingType: "normal",
    });
    li.addChild(new LightTextNode(`Item ${i}`));
    ul.addChild(li);
  }

  console.log("OuterHTML of the ul element:");
  console.log(ul.outerHTML());

  console.log("\nInnerHTML of the ul element:");
  console.log(ul.innerHTML());

  function onClickHandler(e) {
    console.log(`Clicked on <li> with data:`, e.detail);
  }
  function onMouseOverHandler() {
    console.log("Mouse over <li>");
  }

  ul.addEventListener("click", onClickHandler);
  ul.addEventListener("mouseover", onMouseOverHandler);

  console.log("=== Dispatching events ===");
  ul.dispatchEvent("mouseover");
  ul.dispatchEvent("click", { detail: { id: 42 } });
})();

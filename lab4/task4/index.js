import path from "path";
import { LightElementNode } from "./element-node.js";
import { FileSystemImageLoader } from "./file-system-image-loader.js";
import { LightImageNode } from "./image-node.js";
import { NetworkImageLoader } from "./network-image-loader.js";
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

(function testImage() {
  const fileLoader = new FileSystemImageLoader();
  const networkLoader = new NetworkImageLoader();

  const localImg = new LightImageNode(
    path.resolve(process.cwd(), "logo.jpg"),
    fileLoader,
    { classes: ["logo"], alt: "Local Logo" },
  );
  const remoteImg = new LightImageNode(
    "https://picsum.photos/200/300",
    networkLoader,
    { classes: ["banner"], alt: "Remote Banner" },
  );
  (async () => {
    console.log("=== HTML Output ===");
    console.log(localImg.outerHTML());
    console.log(remoteImg.outerHTML());

    console.log("\n=== Loading Data ===");
    const localData = await localImg.load();
    console.log(`Local image loaded: ${localData.byteLength} bytes`);

    const remoteData = await remoteImg.load();
    console.log(`Remote image loaded: ${remoteData.byteLength} bytes`);
  })();
})();

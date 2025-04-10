import { RasterRenderer, VectorRenderer } from "./renderers.js";
import { Circle, Square, Triangle } from "./shapes.js";

(function main() {
  const vectorRenderer = new VectorRenderer();
  const rasterRenderer = new RasterRenderer();

  const circleVector = new Circle(vectorRenderer);
  const squareRaster = new Square(rasterRenderer);
  const triangleVector = new Triangle(vectorRenderer);
  const triangleRaster = new Triangle(rasterRenderer);

  console.log("=== Rendering Shapes ===");
  circleVector.render();
  squareRaster.render();
  triangleVector.render();
  triangleRaster.render();
})();

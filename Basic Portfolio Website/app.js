// Import the p5.js library
import p5 from 'p5';

// Create a new p5.js sketch
const sketch = (p5) => {
  // Set the canvas size
  p5.setup = () => {
    p5.createCanvas(800, 600);
  };

  // Draw the animation
  p5.draw = () => {
    // Set the background color
    p5.background(220);

    // Draw multiple circles with random positions, sizes, and colors
    const numCircles = 10;
    for (let i = 0; i < numCircles; i++) {
      const circleSize = p5.random(20, 80);
      const circleX = p5.random(circleSize, p5.width - circleSize);
      const circleY = p5.random(circleSize, p5.height - circleSize);
      const circleHue = p5.floor(p5.map(p5.sin(p5.frameCount * 0.01 + i * 0.1), -1, 1, 0, 360));

      p5.fill(circleHue, 255, 255, 100);
      p5.noStroke();
      p5.ellipse(circleX, circleY, circleSize, circleSize);
    }

    // Draw multiple rectangles with random positions, sizes, and colors
    const numRectangles = 5;
    for (let i = 0; i < numRectangles; i++) {
      const rectSize = p5.random(50, 150);
      const rectX = p5.random(rectSize, p5.width - rectSize);
      const rectY = p5.random(rectSize, p5.height - rectSize);
      const rectHue = p5.floor(p5.map(p5.cos(p5.frameCount * 0.01 + i * 0.1), -1, 1, 0, 360));

      p5.fill(rectHue, 255, 255, 100);
      p5.rect(rectX, rectY, rectSize, rectSize);
    }

    // Draw a triangle with random position, size, and color
    const triangleSize = p5.random(100, 200);
    const triangleX = p5.random(triangleSize, p5.width - triangleSize);
    const triangleY = p5.random(triangleSize, p5.height - triangleSize);
    const triangleHue = p5.floor(p5.map(p5.tan(p5.frameCount * 0.01), -1, 1, 0, 360));

    p5.fill(triangleHue, 255, 255, 100);
    p5.noStroke();
    p5.triangle(
      triangleX, triangleY,
      triangleX + triangleSize / 2, triangleY - triangleSize,
      triangleX - triangleSize / 2, triangleY - triangleSize
    );
  };
};

// Create a new p5.js instance
const myp5 = new p5(sketch);
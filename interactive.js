<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title>Canvas</title>

  <link rel="stylesheet" type="text/css" href="style.css">
  <script type="text/javascript" src="canvas.js" async></script>
</head>

body {
  margin: 0;
  overflow-x: hidden;
}
canvas {
  background: linear-gradient(45deg, #0d1011 0% 20%, #163486);
}

<body>

  <canvas></canvas>

<script>
const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

window.addEventListener('resize', function () {
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
});

let mouse = {
  x: undefined,
  y: undefined
};
window.addEventListener('mousemove', function (e) {
  mouse.x = event.x;
  mouse.y = event.y;
});

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.initialX = x;
    this.initialY = y;
  };
  draw = () => {
    // this is where we control the shape's appearance
  };
  update = () => {
    // this is where we control movement and interactivity
    this.draw();
  };
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  /* this is where we call our animation methods, such as  
  Shape.draw() */
};
animate();



</script>

</body>

</html>

let img,img2;
function preload() {
  // preload() runs once
  img = loadImage('/vc/docs/sketches/penrose.png');
  img2 = loadImage('/vc/docs/sketches/penrosegif.gif');
}
function setup() {
  resizeCanvas(800, 400);
  image(img, 0,0, 400,400);
}

function draw() {
  image(img2, 400,0, 400,400);
}
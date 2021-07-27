
let grayShader;
let lumaShader;
let theShader;

function preload() {
  img = loadImage('/vc/docs/sketches/lenna.png');
  grayShader = loadShader('/vc/docs/sketches/shader1.vert', '/vc/docs/sketches/rgb.frag');
  lumaShader = loadShader('/vc/docs/sketches/shader1.vert', '/vc/docs/sketches/luma.frag');
  
}

function setup() {
  createCanvas(550, 256, WEBGL);
  noStroke();

  theShader = createGraphics(256, 256, WEBGL);
  theShader.noStroke();
  
  angleMode(DEGREES);
}

function draw() {

  theShader.shader(grayShader);
  grayShader.setUniform('tex', img);
  texture(theShader);
  theShader.rect(0,0,256,256);
  rect(5,-256/2.0,256,256)



  theShader.shader(lumaShader);
  rotateY(180);
  lumaShader.setUniform('tex0', img);
  texture(theShader);
  theShader.rect(0,0,256,256);
  rect(0,-256/2.0,256,256);
  
}

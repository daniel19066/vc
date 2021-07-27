
let grayShader;
let lumaShader;
let theShader;
//https://github.com/afsanchezsa/vc
//cambienlo pirobos o referenciemos a los compañeros para que no joda el profe
function preload() {
  img = loadImage('/vc/docs/sketches/lenna.png');
  grayShader = loadShader('/vc/docs/sketches/shader1.vert', '/vc/docs/sketches/rgb.frag');
  lumaShader = loadShader('/vc/docs/sketches/shader1.vert', '/vc/docs/sketches/luma.frag');
  negativoShader = loadShader('/vc/docs/sketches/shader1.vert','/vc/docs/sketches/negativo.frag')
  
}

function setup() {
  createCanvas(768, 256, WEBGL);
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
  rect(-124,-256/2.0,256,256)

  theShader.shader(negativoShader);
  negativoShader.setUniform('tex', img);
  texture(theShader);
  theShader.rect(0,0,256,256);
  rect(140,-256/2.0,256,256);


  theShader.shader(lumaShader);
  rotateY(180);
  lumaShader.setUniform('tex0', img);
  texture(theShader);
  theShader.rect(0,0,256,256);
  rect(132,-256/2.0,256,256);
  
}

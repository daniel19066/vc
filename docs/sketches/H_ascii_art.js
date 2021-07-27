let theShader;
let shaderTexture;
let img;
//https://computacionvisual2021.github.io/vc/docs/workshops/hardwareAscii
//cambienlo pirobos o referenciemos a los compañeros para que no joda el profe
function preload() {
  img = loadImage('/vc/docs/sketches/lenna.png');
  theShader = loadShader('/vc/docs/sketches/ascii.vert', '/vc/docs/sketches/ascii.frag');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  shaderTexture = createGraphics(700, 800, WEBGL);
  shaderTexture.noStroke();
}

function draw() {

  shaderTexture.shader(theShader);

  theShader.setUniform('tex', img);
  texture(shaderTexture);
  shaderTexture.rect(0,0,512,512);
  rect(-512,-512/2.0,512,512)
}
let sombras;
let shaderTexture;
let img;

function preload() {
  img = loadImage('/vc/docs/sketches/lenna.png');
  // ohhh bella lenna :3
  sombras = loadShader('/vc/docs/sketches/ascii.vert', '/vc/docs/sketches/ascii.frag');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  shaderTexture = createGraphics(700, 800, WEBGL);
  shaderTexture.noStroke();
}

function draw() {

  shaderTexture.shader(sombras);

  sombras.setUniform('tex', img);

  texture(shaderTexture);

  shaderTexture.rect(0,0,512,512);
  
  rect(-512,-512/2.0,512,512)
}
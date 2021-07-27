
let grayShader;
let lumaShader;
let space;
let shaderTexture;
let negativoShader;

//https://github.com/afsanchezsa/vc
function preload() {
  video = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
  grayShader = loadShader('/vc/docs/sketches/shader1.vert', '/vc/docs/sketches/rgb.frag');
  lumaShader = loadShader('/vc/docs/sketches/shader1.vert', '/vc/docs/sketches/luma.frag');
  negativoShader = loadShader('/vc/docs/sketches/shader1.vert','/vc/docs/sketches/negativo.frag')
  video.hide();
}

function setup() {
  createCanvas(550, 256, WEBGL);
  noStroke();

  theShader = createGraphics(256, 256, WEBGL);
  theShader.noStroke();

  video.loop(); 
  angleMode(DEGREES);
}

function draw() {
  
  theShader.shader(grayShader);
  grayShader.setUniform('tex', video);
  texture(theShader);
  theShader.rect(0,0,256,256);
  rect(5,-256/2.0,256,256)

  theShader.shader(lumaShader);
  rotateY(180);
  lumaShader.setUniform('tex0', video);
  texture(theShader);
  theShader.rect(0,0,256,256);
  rect(0,-256/2.0,256,256)
}

function mousePressed() {
  video.loop(); 
}
let img;
let kernel = [[0,-1,0],[-1,4,-1],[0,-1,0]]
function preload() {
  img = loadImage('/vc/docs/sketches/lenna.png')
}
function setup() {
  createCanvas(512, 512*2);
  // put setup code here
  image(img, 0,0)
  let convImage  = createImage(510,510);
  image(convImage, 0,512);
  loadPixels();
  convolution(512,512)
  updatePixels();
  noLoop();
  
}
// se debe haber cargado los pixeles antes de ejecutar la función
function segmentImage(index, width) {
  var pixel =[0,0,0,255];
  for (let vertical = -1; vertical <=1; vertical++) {
    for (let horizontal = -1; horizontal <=1; horizontal++) {
      let i = index + vertical*width*4 + horizontal*4;
      pixel[0] += pixels[i]* kernel[1-vertical][1-horizontal];
      pixel[1] += pixels[i+1]* kernel[1-vertical][1-horizontal];
      pixel[2] += pixels[i+2]* kernel[1-vertical][1-horizontal];
    }
  }
  return pixel;
}

function convolution(width, height) {
  for (let row = 1; row < height-1; row++) {
    for (let col = 1; col < width-1; col++) {
      let pixel = segmentImage(((width*row)+col)*4, width);
      let loc = (col-1 + (row-1)*width)*4 + (512*512)*4
      pixels[loc] = pixel[0]
      pixels[loc+1] = pixel[1]
      pixels[loc+2] = pixel[2]
      pixels[loc+3] = pixel[3]
    }
  }
}

function draw() {
  // put drawing code here
}
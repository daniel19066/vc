

function setup() {
  createCanvas(512, 512);

  let img = createImg("/vc/docs/sketches/lenna.png");;
  img.hide(); // hide the image in the browser
  frameRate(1);
}
  // helper for writing color to array

  function draw() {
      writeColor(img)
      image(img, 0, 0, width, height);
  }


  function writeColor(image) {
    let x, y;
     // fill with random colors
    for (y = 0; y < img.height; y++) {
    for (x = 0; x < img.width; x++) {
      let index = (x + y * width) * 4;
    var grayscale= 0.33*image.pixels[index]+0.5*image.pixels[index+1]+0.15*image.pixcels[index+2];
    image.pixels[index] = grayscale;
    image.pixels[index + 1] = grayscale;
    image.pixels[index + 2] = grayscale;
    image.pixels[index + 3] = 255;
    }
    
  }

  
  }
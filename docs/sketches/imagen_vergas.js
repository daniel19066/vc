function setup() {
  createCanvas(512*2, 512*2);
  img=createImg( '/vc/docs/sketches/lenna.png', 'fotito' );
  
  
  img2=createImg( '/vc/docs/sketches/lenna.png', 'fotito2' );
  
 
}


function draw() {

 image(img, 0 , 0, 512, 512);
  img.size(512,512);
  loadPixels();
  for (var y = 0; y < height*4; y++) {
            for (var x = 0; x < width; x++) {
              var index = (x + y * width)*4;
              var r = pixels[index+0];
              var g = pixels[index+1];
              var b = pixels[index+2];

              var bw = (r + g + b)/3;

              pixels[index+0] = bw;
              pixels[index+1] = bw;
              pixels[index+2] = bw;
        }
      }
      updatePixels();
  image(img2,512,0,512,512);
  img2.size(512,512);
  loadPixels();
  for (var y = 0; y < height*4; y++) {
    for (var x = 512; x < width; x++) {
      var index = (x + y * width)*4;
      var r = pixels[index+0];
      var g = pixels[index+1];
      var b = pixels[index+2];

      pixels[index+0] = 255-r;
      pixels[index+1] = 255-g;
      pixels[index+2] = 255-b;
}
}
updatePixels();
}


  

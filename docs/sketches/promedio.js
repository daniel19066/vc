function setup() {
  createCanvas(512, 512);
  img=createImg( '/vc/docs/sketches/lenna.png', 'fotito' );
 
}


function draw() {

 image(img, 0 , 0); 
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

}


  

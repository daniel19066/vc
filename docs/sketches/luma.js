function setup() {
    createCanvas(512, 512);
    img=createImg( '/vc/docs/sketches/lenna.png', 'fotito' );
    img.hide();
    
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
  
                var HDTV = 0.2126*r + 0.7152*g + 0.0722*b;
  
                pixels[index+0] = HDTV;
                pixels[index+1] = HDTV;
                pixels[index+2] = HDTV;
          }
        }
        updatePixels();

        
  }
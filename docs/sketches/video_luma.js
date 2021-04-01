let fingers;

function setup() {
  createCanvas(320, 240);
  // specify multiple formats for different browsers
  fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm'],0,240);
  fingers.hide();// by default video shows up in separate dom
  // element. hide it and draw it to the canvas
  // instead
}

function draw() {
  image(fingers, 0, 0); // draw the video frame to canvas
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

function mousePressed() {
  fingers.loop(); // set the video to loop and start playing
}
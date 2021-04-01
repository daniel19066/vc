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

              var bw = (r + g + b)/3;

              pixels[index+0] = bw;
              pixels[index+1] = bw;
              pixels[index+2] = bw;
        }
      }
      updatePixels();

}

function mousePressed() {
  fingers.loop(); // set the video to loop and start playing
}
let fingers;
let kernel = [[-1,-1,-1],[-1,8,-1],[-1,-1,-1]]
let convFingers;

function setup() {
  createCanvas(320, 600);
  // specify multiple formats for different browsers
  fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
  fingers.hide(); // by default video shows up in separate dom
  // element. hide it and draw it to the canvas
  // instead
  convFingers = createImage(fingers.width, fingers.height)
}

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

function convolution(width, height, img) {
	for (let row = 1; row < height-1; row++) {
		for (let col = 1; col < width-1; col++) {
		let pixel = segmentImage(((width*row)+col)*4, width);
		let loc = (col-1 + (row-1)*width)*4 + width*height*4
		pixels[loc] = pixel[0]
		pixels[loc+1] = pixel[1]
		pixels[loc+2] = pixel[2]
		pixels[loc+3] = pixel[3]
		}
	}
}

function draw() {
  background(150);
  let d = pixelDensity();
  image(fingers, 0,0); // draw the video frame to canvas
   loadPixels();
   convolution(fingers.width*d, fingers.height*d, convFingers)
   updatePixels();
   image(convFingers, 0,330)
}

function mousePressed() {
  fingers.loop(); // set the video to loop and start playing
}
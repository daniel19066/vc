let theShader;
let img;
let reproduce = false;

const Blur_Kernel= [ 0.11, 0.11, 0.11 ,0.11, 0.11, 0.11, 0.11, 0.11, 0.11]; 
let Border_Detection= [ -1.0, -1.0, -1.0 , -1.0,  8.0, -1.0 , -1.0, -1.0, -1.0  ];
const Emboss= [ 1,  1,  0, 1,  0, -1 , 0,  -1,  -1]; 
const Sharpe= [ 0, -1, 0 , -1,  5, -1, 0, -1, 0 ]; 

let contador=0;
let matrixCarrousel= [Blur_Kernel,Border_Detection,Emboss,Sharpe];
let kernel = matrixCarrousel[0] ;
//https://github.com/afsanchezsa/vc
function preload() {
 theShader = loadShader('/vc/docs/sketches/shader_conv.vert', '/vc/docs/sketches/conv.frag');
 img = loadImage('/vc/docs/sketches/lenna.png');
}

function setup() {
 createCanvas(512, 512, WEBGL);
 noStroke();
 textureMode(NORMAL); 
 shader(theShader);
 theShader.setUniform('texture', img);
 theShader.setUniform('texOffset',[1/img.width,1/img.height]);
 button=createButton('Change Kernel!');
 button.position(225,500);
 button.mousePressed(changeMatrix);
}
function draw() {
 background(0);

 beginShape() 
 vertex(-width / 2, height / 2, 0, 0, 1);
 vertex(width / 2, height / 2, 0, 1, 1);
 vertex(width / 2, -height / 2, 0, 1, 0);
 vertex(-width / 2, -height / 2, 0, 0, 0);
 theShader.setUniform('kernel', kernel);
 endShape(CLOSE)

}
function changeMatrix(){
 contador=(contador+1)%matrixCarrousel.length;
 kernel=matrixCarrousel[contador];
}
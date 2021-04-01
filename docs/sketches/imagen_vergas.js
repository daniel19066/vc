var quadrille;
let image;
let text ="";
const grayRamp = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'. ';
const rampLength = grayRamp.length;

function preload() {
  image = loadImage('../sketches/lenna.png');
}

function setup() {
  createCanvas(1000, 1000);
  
  let scl = 2 ** 4;
  quadrille = createQuadrille(20 * scl, image);
  drawQuadrille(quadrille, 0, 0, 40 / scl, 1.6 / scl, color(random(255)));
  gray();
  // drawQuadrille(gray(),0,0,40 / scl, 1.6 / scl, color(random(255)));
  download("cosa.txt",text);
  //var d1 = document.getElementById("defaultCanvas0");
  //d1.insertAdjacentText('afterend',text);

  //text(text,0,800);
  noLoop();
}

function draw() {


}

function gray(){
  quadrille2 = quadrille.clone();
  for (let i = 0; i < quadrille.height; i++) {
    for (let j = 0; j < quadrille.width; j++) {
      
      let color = quadrille.read(i,j);

      let promedio = (color[0] + color[1] + color[2])/3;

      quadrille2.fill(i,j,[promedio,promedio,promedio,255]);
      text+= grayRamp[Math.ceil((rampLength - 1) * promedio / 255)];
    }
    //console.log(text);
    text+='\n';
  }

  return quadrille2;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

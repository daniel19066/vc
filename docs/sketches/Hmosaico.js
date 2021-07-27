let image;
let mosaico;
let resolucion;

function preload() {
    //Precargar imagen base y shaders
    image = loadImage('/vc/docs/sketches/mosaico/lion.jpg');
    mosaico = loadShader('/vc/docs/sketches/mosaico.vert', '/vc/docs/sketches/mosaico.frag');

    //Cargar imagenes de dataset para mosaicoo
    img1 = loadImage('/vc/docs/sketches/mosaico/color1.jpg');
    img2 = loadImage('/vc/docs/sketches/mosaico/color2.jpg');
    img3 = loadImage('/vc/docs/sketches/mosaico/color3.jpg');
    img4 = loadImage('/vc/docs/sketches/mosaico/color4.jpg');
    img5 = loadImage('/vc/docs/sketches/mosaico/color5.jpg');
    img6 = loadImage('/vc/docs/sketches/mosaico/color6.jpg');
    img7 = loadImage('/vc/docs/sketches/mosaico/color7.jpg');
    img8 = loadImage('/vc/docs/sketches/mosaico/color8.jpg');
    img9 = loadImage('/vc/docs/sketches/mosaico/color9.jpg');
    img10 = loadImage('/vc/docs/sketches/mosaico/color10.jpg');
    img11 = loadImage('/vc/docs/sketches/mosaico/color11.jpg');
    img12 = loadImage('/vc/docs/sketches/mosaico/color12.jpg');
    img13 = loadImage('/vc/docs/sketches/mosaico/color13.jpg');
    img14 = loadImage('/vc/docs/sketches/mosaico/color14.jpg');
    img15 = loadImage('/vc/docs/sketches/mosaico/color15.jpg');
}

function setup() {
    //Crear canvas
    createCanvas(700, 700, WEBGL);
    textureMode(NORMAL);
    noStroke();
    
    shader(mosaico);

    mosaico.setUniform('img', image);
    mosaico.setUniform('img1', img1);
    mosaico.setUniform('img2', img2);
    mosaico.setUniform('img3', img3);
    mosaico.setUniform('img4', img4);
    mosaico.setUniform('img5', img5);
    mosaico.setUniform('img6', img6);
    mosaico.setUniform('img7', img7);
    mosaico.setUniform('img8', img8);
    mosaico.setUniform('img9', img9);
    mosaico.setUniform('img10', img10);
    mosaico.setUniform('img11', img11);
    mosaico.setUniform('img12', img12);
    mosaico.setUniform('img13', img13);
    mosaico.setUniform('img14', img14);
    mosaico.setUniform('img15', img15);
    
    resolucion = createSlider(10, 100, 50, 1);
    resolucion.position(90, 50);
    resolucion.style('width', '90px');
    resolucion.input(() => mosaico.setUniform('resolucion', resolucion.value()));
    mosaico.setUniform('resolucion', resolucion.value());
}

function draw() {
    background(33);
    beginShape();

    vertex(-width / 2, -height / 2, 0, 0, 0);
    vertex(width / 2, -height / 2, 0, 1, 0);
    vertex(width / 2, height / 2, 0, 1, 1);
    vertex(-width / 2, height / 2, 0, 0, 1);

    endShape(CLOSE);
}
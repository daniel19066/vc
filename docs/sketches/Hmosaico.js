let image;
let om;
let mosaic;
let resolution;
let om_on;

function preload() {
    //Precargar imagen base y shaders
    image = loadImage('/vc/docs/img/globos.jpg');
    om = loadImage('/vc/docs/img/omkara.png');
    mosaic = loadShader('/vc/docs/sketches/mosaico.vert', '/vc/docs/sketches/mosaico.frag');

    //Cargar imagenes de dataset para mosaico
    img1 = loadImage('/vc/docs/sketches/mosaic/color1.jpg');
    img2 = loadImage('/vc/docs/sketches/mosaic/color2.jpg');
    img3 = loadImage('/vc/docs/sketches/mosaic/color3.jpg');
    img4 = loadImage('/vc/docs/sketches/mosaic/color4.jpg');
    img5 = loadImage('/vc/docs/sketches/mosaic/color5.jpg');
    img6 = loadImage('/vc/docs/sketches/mosaic/color6.jpg');
    img7 = loadImage('/vc/docs/sketches/mosaic/color7.jpg');
    img8 = loadImage('/vc/docs/sketches/mosaic/color8.jpg');
    img9 = loadImage('/vc/docs/sketches/mosaic/color9.jpg');
    img10 = loadImage('/vc/docs/sketches/mosaic/color10.jpg');
    img11 = loadImage('/vc/docs/sketches/mosaic/color11.jpg');
    img12 = loadImage('/vc/docs/sketches/mosaic/color12.jpg');
    img13 = loadImage('/vc/docs/sketches/mosaic/color13.jpg');
    img14 = loadImage('/vc/docs/sketches/mosaic/color14.jpg');
    img15 = loadImage('/vc/docs/sketches/mosaic/color15.jpg');
    img16 = loadImage('/vc/docs/sketches/mosaic/color16.jpg');
    img17 = loadImage('/vc/docs/sketches/mosaic/color17.jpg');
    img18 = loadImage('/vc/docs/sketches/mosaic/color18.jpg');
    img19 = loadImage('/vc/docs/sketches/mosaic/color19.jpg');
    img20 = loadImage('/vc/docs/sketches/mosaic/color20.jpg');
    img21 = loadImage('/vc/docs/sketches/mosaic/color21.jpg');
    img22 = loadImage('/vc/docs/sketches/mosaic/color22.jpg');
    img23 = loadImage('/vc/docs/sketches/mosaic/color23.jpg');
    img24 = loadImage('/vc/docs/sketches/mosaic/color24.jpg');
    img25 = loadImage('/vc/docs/sketches/mosaic/color25.jpg');
    img26 = loadImage('/vc/docs/sketches/mosaic/color26.jpg');
    img27 = loadImage('/vc/docs/sketches/mosaic/color27.jpg');

}

function setup() {
    createCanvas(600, 600, WEBGL);
    textureMode(NORMAL);
    noStroke();

    //definir los shaders a usar
    shader(mosaic);
    mosaic.setUniform('om', om);
    
    //Mostrar en pantalla una casilla de verificación para intercambiar entre el mosaico y la imagen original
    om_on = createCheckbox('Mosaic', false);
    om_on.changed(() => mosaic.setUniform('om_on', om_on.checked()));
    om_on.position(10, 10);

    //Pasar imagenes a fragment shader
    mosaic.setUniform('img', image);
    mosaic.setUniform('img0', img0);
    mosaic.setUniform('img1', img1);
    mosaic.setUniform('img2', img2);
    mosaic.setUniform('img3', img3);
    mosaic.setUniform('img4', img4);
    mosaic.setUniform('img5', img5);
    mosaic.setUniform('img6', img6);
    mosaic.setUniform('img7', img7);
    mosaic.setUniform('img8', img8);
    mosaic.setUniform('img9', img9);
    mosaic.setUniform('img10', img10);
    mosaic.setUniform('img11', img11);
    mosaic.setUniform('img12', img12);
    
    //Mostrar en pantalla un deslizador para ajustar la resolución de la imagen y el mosaico a mostrar
    // Cambiar por la libreria que yo use, más bonito y facil.
    resolution = createSlider(10, 100, 30, 1);
    resolution.position(10, 50);
    resolution.style('width', '80px');
    resolution.input(() => mosaic.setUniform('resolution', resolution.value()));
    mosaic.setUniform('resolution', resolution.value());
}

function draw() {
    background(33);
    
    cover(true);
}

function cover(texture = false) {
    beginShape();
    let mitad_ancho = width / 2;
    let mitad_largo = height / 2;
    if (texture) {
        vertex(-mitad_ancho, -mitad_largo, 0, 0, 0);
        vertex(mitad_ancho, -mitad_largo, 0, 1, 0);
        vertex(mitad_ancho, mitad_largo, 0, 1, 1);
        vertex(-mitad_ancho, mitad_largo, 0, 0, 1);
    }
    else {
        vertex(-mitad_ancho, -mitad_largo, 0);
        vertex(mitad_ancho, -mitad_largo, 0);
        vertex(mitad_ancho, mitad_largo, 0);
        vertex(-mitad_ancho, mitad_largo, 0);
    }
    endShape(CLOSE);
}
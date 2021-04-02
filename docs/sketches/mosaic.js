var quadrille,q2;
var img,color1,color2,color3,color4,color5,color6,color7,color8,color9,color10,color11,color12,color13,color14,color15,color16,color17,color18;
var color19,color20,color21,color22,color23,color24,color25,color26,color27;
var row=0;
let i=2;
let scl = 2 ** i;


function preload() {
  //img = loadImage('/vc/docs/sketches/mosaic/ericandre.png');
  img = loadImage('/vc/docs/sketches/mosaic/lion.jpg');
  //----------------------------colore--------------------------------------
  color1= loadImage('/vc/docs/sketches/mosaic/color1.jpg');
  color2= loadImage('/vc/docs/sketches/mosaic/color2.jpg');
  color3= loadImage('/vc/docs/sketches/mosaic/color3.jpg');
  color4= loadImage('/vc/docs/sketches/mosaic/color4.jpg');
  color5= loadImage('/vc/docs/sketches/mosaic/color5.jpg');
  color6= loadImage('/vc/docs/sketches/mosaic/color6.jpg');
  color7= loadImage('/vc/docs/sketches/mosaic/color7.jpg');
  color8= loadImage('/vc/docs/sketches/mosaic/color8.jpg');
  color9= loadImage('/vc/docs/sketches/mosaic/color9.jpg');
  color10= loadImage('/vc/docs/sketches/mosaic/color10.jpg');
  color11= loadImage('/vc/docs/sketches/mosaic/color11.jpg');
  color12= loadImage('/vc/docs/sketches/mosaic/color12.jpg');
  color13= loadImage('/vc/docs/sketches/mosaic/color13.jpg');
  color14= loadImage('/vc/docs/sketches/mosaic/color14.jpg');
  color15= loadImage('/vc/docs/sketches/mosaic/color15.jpg');
  color16= loadImage('/vc/docs/sketches/mosaic/color16.jpg');
  color17= loadImage('/vc/docs/sketches/mosaic/color17.jpg');
  color18= loadImage('/vc/docs/sketches/mosaic/color18.jpg');
  color19= loadImage('/vc/docs/sketches/mosaic/color19.jpg');
  color20= loadImage('/vc/docs/sketches/mosaic/color20.jpg');
  color21= loadImage('/vc/docs/sketches/mosaic/color21.jpg');
  color22= loadImage('/vc/docs/sketches/mosaic/color22.jpg');
  color23= loadImage('/vc/docs/sketches/mosaic/color23.jpg');
  color24= loadImage('/vc/docs/sketches/mosaic/color24.jpg');
  color25= loadImage('/vc/docs/sketches/mosaic/color25.jpg');
  color26= loadImage('/vc/docs/sketches/mosaic/color26.jpg');
  color27= loadImage('/vc/docs/sketches/mosaic/color27.jpg');

}

function setup() {
  createCanvas(800, 570);
}

function draw() {
  if(row==0){
    
    quadrille = createQuadrille(20  * scl, img);
    drawQuadrille(quadrille, 0, 0, 40 / scl, 1.6 / scl, color(0));
  }
  if(row<quadrille._memory2D.length){
    rowimage(row);
    row++;
  }

  /*quadrille = createQuadrille(20  * scl, img);
  drawQuadrille(quadrille, 0, 0, 40 / scl, 1.6 / scl, color(0));
  rowimage(25);
  noLoop();*/
}

function rowimage(row){
  //console.log(quadrille._memory2D);
  var r;
  var tile;
  for(var x=0;x<quadrille._memory2D[0].length;x++){//0-27 row
    
    tile=quadrille._memory2D[row][x];

    console.log(tile);
    r= Math.round(Math.random() * 3);
    //----------------------------color1--------------------------------------
    if((tile[0]>=170) && (tile[1]>=170) && (tile[2]>=170)){
      image(color1,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color2--------------------------------------
    if((tile[0]>=85)&& (tile[0]<170) && (tile[1]>=170) && (tile[2]>=170)){
      image(color2,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color3--------------------------------------
    if((tile[0]<85) && (tile[1]>=170) && (tile[2]>=170)){
      image(color3,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color4--------------------------------------
    if( (tile[0]>=127) && (tile[1]>=85) && (tile[1]<170) && (tile[2]>=170)){
      image(color4,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color5--------------------------------------
    if( (tile[0]>=170) && (tile[1]<85) && (tile[2]>=170)){
      image(color5,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color6--------------------------------------
    if( (tile[0]>=170) && (tile[1]>=170) && (tile[2]>=85) && (tile[2]<170)){
      image(color6,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color7--------------------------------------
    if( (tile[0]>=170) && (tile[1]>=170) &&  (tile[2]<85)){
      image(color7,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color8--------------------------------------
    if( (tile[0]>=85) && (tile[0]<170) &&  (tile[1]>=85) && (tile[1]<170) &&  (tile[2]>=85) && (tile[2]<170)){
      image(color8,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color9--------------------------------------
    if( (tile[0]>=172) && (tile[1]>=85) && (tile[1]<170) &&  (tile[2]>=85) && (tile[2]<170)){
      image(color9,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color10--------------------------------------
    if((tile[0]<85) &&  (tile[1]>=85) && (tile[1]<170) &&  (tile[2]>=85) && (tile[2]<170)){
      image(color10,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color11--------------------------------------
    if( (tile[0]>=85) && (tile[0]<170) &&  (tile[1]>=170)  &&  (tile[2]>=85) && (tile[2]<170)){
      image(color11,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color12--------------------------------------
    if( (tile[0]>=85) && (tile[0]<170) &&  (tile[1]<85)  &&  (tile[2]>=85) && (tile[2]<170)){
      image(color12,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color13--------------------------------------
    if( (tile[0]>=85) && (tile[0]<170) &&  (tile[1]>=85) && (tile[1]<170) &&  (tile[2]>=85) ){
      image(color13,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color14--------------------------------------
    if( (tile[0]>=85) && (tile[0]<170) &&  (tile[1]>=85) && (tile[1]<170) &&  (tile[2]<85) ){
      image(color14,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color15--------------------------------------
    if( (tile[0]<85) && (tile[1]<85) &&  (tile[2]<85)){
      image(color15,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color16--------------------------------------
    if( (tile[0]>=85) && (tile[0]<170) && (tile[1]<85) &&  (tile[2]<85)){
      image(color16,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color17--------------------------------------
    if( (tile[0]>=170)  && (tile[1]<85) &&  (tile[2]<85)){
      image(color17,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color18--------------------------------------
    if( (tile[0]<85)  && (tile[1]>=85) && (tile[1]<170) &&  (tile[2]<85)){
      image(color18,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color19--------------------------------------
    if( (tile[0]<85)  && (tile[1]>=170) &&  (tile[2]<85)){
      image(color19,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color20--------------------------------------
    if( (tile[0]<85)  && (tile[1]<85) &&  (tile[2]>=85) && (tile[2]<170)){
      image(color20,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color21--------------------------------------
    if( (tile[0]<85)  && (tile[1]<85) &&  (tile[2]>=170) ){
      image(color21,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color22--------------------------------------
    if( (tile[0]>170)  && (tile[1]>=85)&& (tile[1]<170) &&  (tile[2]<85) ){
      image(color22,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color23--------------------------------------
    if( (tile[0]>=85)  && (tile[0]<170)  &&  (tile[1]<85) &&  (tile[2]>=170)){
      image(color23,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color24--------------------------------------
    if((tile[0]>=85)  && (tile[0]<170)  &&  (tile[1]>=170) &&  (tile[2]<85)){
      image(color24,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color25--------------------------------------
    if( (tile[0]>=170)  &&  (tile[1]<85) &&  (tile[2]>=85)&&  (tile[2]<170)){
      
      image(color25,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color26--------------------------------------
    if( (tile[0]<85)  &&  (tile[1]>=170) &&  (tile[2]>=85)&&  (tile[2]<170)){
      image(color26,x*20 / i,row*20 / i,20 / i,20 / i);
    }
    //----------------------------color27--------------------------------------
    if( (tile[0]<85)  &&  (tile[1]>=85) &&  (tile[1]<170) &&  (tile[2]>=170)){
      image(color27,x*20 / i,row*20 / i,20 / i,20 / i);
    }




    
  }
}
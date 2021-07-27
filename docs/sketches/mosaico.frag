uniform sampler2D img1;
uniform sampler2D img2;
uniform sampler2D img3;
uniform sampler2D img4;
uniform sampler2D img5;
uniform sampler2D img6;
uniform sampler2D img7;
uniform sampler2D img8;
uniform sampler2D img9;
uniform sampler2D img10;
uniform sampler2D img11;
uniform sampler2D img12;
uniform sampler2D img13;
uniform sampler2D img14;
uniform sampler2D img15;

precision mediump float;

uniform sampler2D img;

uniform float resolucion;

varying vec4 vVertexColor;

varying vec2 vTexCoord;

void main() {

  vec2 cPos = vTexCoord * resolucion;

  vec2 texCoord = floor(cPos);

  cPos = cPos - texCoord;

  texCoord = texCoord * vec2(1.0) / vec2(resolucion);

  vec4 imgTexel = texture2D(img, texCoord);

  float luma = imgTexel.r *0.299 + imgTexel.g * 0.587 +  imgTexel.b*0.114;
    if(luma < 0.066){
         gl_FragColor = texture2D(img15, cPos);
    }else if(luma < 0.132){
         gl_FragColor = texture2D(img2, cPos);
    }else if(luma < 0.198){
         gl_FragColor = texture2D(img3, cPos);
    }else if(luma < 0.264){
         gl_FragColor = texture2D(img4, cPos);
    }else if(luma < 0.33 ){
         gl_FragColor = texture2D(img5, cPos);
    }else if(luma < 0.396){
         gl_FragColor = texture2D(img6, cPos);
    }else if(luma < 0.462){
         gl_FragColor = texture2D(img7, cPos);
    }else if(luma < 0.528){
         gl_FragColor = texture2D(img8, cPos);
    }else if(luma < 0.594){
         gl_FragColor = texture2D(img9, cPos);
    }else if(luma < 0.66){
         gl_FragColor = texture2D(img10, cPos);
    }else if(luma < 0.726){
         gl_FragColor = texture2D(img11, cPos);
    }else if(luma < 0.792){
         gl_FragColor = texture2D(img12, cPos);
    }else if(luma < 0.858){
         gl_FragColor = texture2D(img13, cPos);
    }else if(luma < 0.924){
         gl_FragColor = texture2D(img14, cPos); 
    }else if(luma <= 1.0){
         gl_FragColor = texture2D(img1, cPos);
    }
}
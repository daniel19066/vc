#ifdef GL_ES
precision mediump float;
#endif
uniform sampler2D tex;
int getBit(int n, int a) {
 float valor = float(n);
 for(float i = 27.0; i >= 0.0; i -= 1.0) {
   float val = pow(2.0,i*1.0);

   if (val <= valor) {
     valor -= val;
     if(i == float(a)) return 1;
   }
 }
 return 0;
}
float char(int n, vec2 p)
{
   p = floor(p*vec2(4.0, -4.0) + 2.5);
   if (clamp(p.x, 0.0, 4.0) == p.x)
   {
       if (clamp(p.y, 0.0, 4.0) == p.y)    
       {
           int a = int(floor(p.x+0.5) + 5.0 * floor(p.y+0.5));
           if (getBit(n,a) == 1) return 1.0;
       }    
   }
   return 0.0;
}

void main() {
 vec2 pix = gl_FragCoord.xy;
 pix.y = 393.0*2.0 - pix.y;
 vec2 resol = vec2(393.0*2.0, 393.0*2.0);

   vec3 col = texture2D(tex, floor(pix/8.0)*8.0/resol).rgb;    

   float gray = 0.3 * col.r + 0.59 * col.g + 0.11 * col.b;

   int n =  4096;                
   if (gray > 0.1) n = 4096;     // .    
   if (gray > 0.2) n = 6144;     //"
   if (gray > 0.25) n = 65600;   // :
   if (gray > 0.3) n = 135296;   //|
   if (gray > 0.35) n = 332772;   // *
   if (gray > 0.4) n = 15255086; // o
   if (gray > 0.45) n =  463296;  //z
   if (gray > 0.5) n = 18400814; //U
   if (gray > 0.55) n = 15221262; //C
   if (gray > 0.6) n = 16033071; //O
   if (gray > 0.65) n = 23385164; // &
   if (gray > 0.7) n = 15252014; //B 
   if (gray > 0.75) n= 14989614;// 8
   if (gray > 0.8) n = 13199452; // @
   if (gray > 0.85) n = 11512810;// #
   if (gray > 0.9) n= 16398526;

   vec2 p = mod(pix/4.0, 2.0) - vec2(1.0);

   col = vec3(char(n, p));

   gl_FragColor = vec4(col, 1.0);
}
// Agradecido con  Camilo Gómez https://www.shadertoy.com/view/lssGDj
precision highp float;
// p5.js following these naming conventions:
// https://github.com/processing/p5.js/blob/main/contributor_docs/webgl_mode_architecture.md

attribute vec3 aPosition;

// vertex texture coordinate attribute
attribute vec2 aTexCoord;

// vertex color attribute
attribute vec4 aVertexColor;

// Either a perspective or an orthographic projection
uniform mat4 uProjectionMatrix;

// modelview = view * model
uniform mat4 uModelViewMatrix;

// vertex color
varying vec4 vVertexColor;

// vertex texcoord
varying vec2 vTexCoord;

void main() {
  // copy / interpolate color
  vVertexColor = aVertexColor;
  // copy / interpolate texcoords
  vTexCoord = aTexCoord;
  // vertex projection into clipspace
  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
}
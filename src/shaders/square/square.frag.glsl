precision highp float;

varying vec2 uv;

float square(vec2 center, float size) {
  vec2 halfWidth = vec2(size) * 0.5;
  float horz = step(center.x - halfWidth.x, uv.x) + -step(center.x + halfWidth.x, uv.x);
  float vert = step(center.y - halfWidth.y, uv.y) + -step(center.y + halfWidth.y, uv.y);
  return horz * vert;
}

void main(){
  float inSquare = square(vec2(.36,.67),.3);
  vec3 color = vec3(0,0,1) * inSquare;
  gl_FragColor = vec4(color, 1 );
}
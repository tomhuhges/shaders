precision highp float;

varying vec2 uv;

float circle(vec2 center, float radius) {
  return 1. - step(radius, distance(uv,center));
}

void main(){
  float inCircle = circle(vec2(.67,.46),.25);
  vec3 color = vec3(1,0,0) * inCircle;
  gl_FragColor = vec4(color, 1. );
}
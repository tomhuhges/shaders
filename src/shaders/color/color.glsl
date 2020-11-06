precision highp float;

varying vec2 uv;

void main(){
  gl_FragColor = vec4( uv.y, uv.x, .5 , 1. );
}
precision highp float;

varying vec2 uv;

void main(){
  gl_FragColor = vec4( uv, .5 , 1. );
}
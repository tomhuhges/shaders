import { Shaders, GLSL } from 'gl-react';
import helloGL from '../shaders/hello-gl/hello-gl.glsl';

export default Shaders.create({
  helloGL: {
    frag: GLSL(helloGL)
  }
});
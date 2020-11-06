import React from 'react';
import { Shaders, Node, GLSL } from 'gl-react';
import helloGL from './hello-gl.glsl';

const shaders = Shaders.create({
  helloGL: {
    frag: GLSL`${helloGL}`
  }
});

const HelloGl = () => (
  <Node shader={shaders.helloGL} />
);

export default HelloGl;


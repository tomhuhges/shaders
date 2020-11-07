import React from 'react';
import { Shaders, Node, GLSL } from 'gl-react';
import vert from './hello-gl.vert.glsl';
import frag from './hello-gl.frag.glsl';

const shaders = Shaders.create({
  helloGL: {
    vert: GLSL`${vert}`,
    frag: GLSL`${frag}`
  }
});

const HelloGl = () => (
  <Node shader={shaders.helloGL} />
);

export default HelloGl;


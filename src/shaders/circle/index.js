import React from 'react';
import { Shaders, Node, GLSL } from 'gl-react';
import frag from './circle.frag.glsl';

const shaders = Shaders.create({
  circle: {
    frag: GLSL`${frag}`
  }
});

const Circle = () => (
  <Node shader={shaders.circle} />
);

export default Circle;


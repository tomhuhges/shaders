import React from 'react';
import { Shaders, Node, GLSL } from 'gl-react';
import color from './color.glsl';

const shaders = Shaders.create({
  color: {
    frag: GLSL`${color}`
  }
});

const Color = () => (
  <Node shader={shaders.color} />
);

export default Color;


import React from 'react';
import { Shaders, Node, GLSL } from 'gl-react';
import frag from './square.frag.glsl';

const shaders = Shaders.create({
  square: {
    frag: GLSL`${frag}`
  }
});

const Square = () => (
  <Node shader={shaders.square} />
);

export default Square;


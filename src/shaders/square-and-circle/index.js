import React from 'react';
import { Shaders, Node, GLSL } from 'gl-react';
import frag from './square-and-circle.frag.glsl';

const shaders = Shaders.create({
  squareAndCircle: {
    frag: GLSL`${frag}`
  }
});

const SquareAndCircle = () => (
  <Node shader={shaders.squareAndCircle} />
);

export default SquareAndCircle 


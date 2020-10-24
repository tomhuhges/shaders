import { Node } from "gl-react";
import shaders from '../../shader-definitions';

const HelloGl = () => (
  <Node shader={shaders.helloGL} />
);

export default HelloGl;


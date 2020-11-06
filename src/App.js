import './App.css';
import React, { useState } from 'react';
import { Surface } from "gl-react-dom";
import shaders from './shaders';

function App() {
  const [shader, setShader] = useState('helloGL');
  const Shader = shaders[shader];
  const handleInput = e => {
    setShader(e.target.value);
  }
  return (
    <div className="App">
      <form className="drawer">
        <input id="#helloGL" type="radio" value="helloGL" onInput={handleInput} checked={shader === 'helloGL'} />
        <label for="#helloGL">helloGL</label>
        <input id="#color" type="radio" value="color" onInput={handleInput} checked={shader === 'color'} />
        <label for="#color">color</label>
      </form>
      <div class="main">
        <Surface width={300} height={300}>
          {Shader ? (
            <Shader />
          ) : null}
        </Surface>
      </div>
    </div>
  );
}

export default App;

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
        {Object.keys(shaders).map(shaderName => (
          <React.Fragment>
            <input id={`#${shaderName}`} type="radio" value={shaderName} onInput={handleInput} checked={shader === shaderName} />
            <label for={`#${shaderName}`}>{shaderName}</label>
          </React.Fragment>
        ))}
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

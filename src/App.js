import './App.css';
import { Surface } from "gl-react-dom";
import HelloGl from './shaders/hello-gl';

function App() {
  return (
    <div className="App">
      <Surface width={300} height={300}>
        <HelloGl />
      </Surface>
    </div>
  );
}

export default App;

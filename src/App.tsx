import './App.css';
import {Usuario} from './models/Usuario.ts';

function App() {

  const u1 = new Usuario('João Da Silva', 37);
  u1.idade = 40;
  return (
    <div>
    <p>{u1.apresentar()}</p>
    </div>
  )
}

export default App

import ValueDisplay from "./components/ValueDisplay";
import { useState } from "react";
import './components/App.module.css'


function App() {
const [inputValue, setInputValue] = useState('')

  return (
    <div className="App">
      <input 
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите текст"
        />
      <ValueDisplay value={inputValue} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
const root = document.getElementById("root");

function App() {
  const [amount, setAmount]= useState();
  const [inverted, setInverted] = useState(false);
  const onChange = (event)=> setAmount(event.target.value);
  const reset = ()=> setAmount(0);
  const onInvert = ()=> {
    reset();
    setInverted((current)=>!current)
  }
  return (
    <div className="App">
      <h1>Super Converter</h1>
      <div>
      <label htmlFor="minutes">Minutes</label>
        <input
          value={inverted ? amount * 60 : amount}
          id='minutes'
          placeholder='Minutes'
          type="number" 
          onChange={onChange}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input 
          value={inverted ? amount : Math.round(amount/60)} 
          id='hours' 
          placeholder='Hours' 
          type="number" 
          disabled={!inverted}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
    </div>
  );
}

export default App;

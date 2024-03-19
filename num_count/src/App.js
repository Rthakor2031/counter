import './App.css';
import {useState} from 'react';
function App() {
  let[Data,setdata]=useState(0)
  let Increament = ()=>{
    setdata(Data += 1)
  }
  let Decrement = ()=>{
    setdata(Data -= 1)
  }

  return (
    <div className="App">
      <h1>Count no: <span style={{color:'blue'}}>{Data}</span></h1>
      <button onClick={Increament} style={{margin:'7px'}}>Increament</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default App;

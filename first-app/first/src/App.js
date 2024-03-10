import './App.css';
import { useState } from "react";
function Greet() {
  return(
    <h1>Hiii</h1>
  )
}
function LogIn() {
  return(
    <h1>LogIn</h1>
  )
}

function App() {
  let [count , setCount] = useState(0);
 let isLogged = false;
 const addval =()=>{
  setCount(count+1);
 }
 const remove =()=>{
  setCount(count-1);
 }
  return (
    <div className="App">
        <header>    
             {isLogged ? <Greet /> : <LogIn />}
             {count}
        </header>
        <div className='main'>
          <button onClick={addval}>Add</button>
          <button onClick={remove}>remove</button>

        </div>
    </div>
  );
}

export default App;

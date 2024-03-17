import { useState } from "react";
function App() {
  
  let [color, setcolor] = useState("cyan");
  return (
    <>
      <div className="main h-screen flex justify-center items-center gap-x-3 duration-200" style={{backgroundColor : color}}>
        <button className="py-4 px-7 bg-yellow-500 flex justify-center items-center border-solid border-2 border-sky-200" onClick={()=>{setcolor('yellow')}}> Yellow </button>
        <button className="py-4 px-7 bg-blue-500 flex justify-center items-center border-solid border-2 border-sky-200" onClick={()=>{setcolor('blue')}}> Blue </button>
        <button className="py-4 px-7 bg-red-500 flex justify-center items-center border-solid border-2 border-sky-200" onClick={()=>{setcolor('red')}}> Red </button>
      </div>
    </>
  );
}

export default App;
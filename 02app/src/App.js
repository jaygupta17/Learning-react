import { useState, useCallback , useRef , useEffect} from "react";
function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  let generate = useCallback(()=>{

    let pass = "";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      const char =Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char) 
    }
    setpassword(pass)

  } , [length , numAllowed , charAllowed]);

  useEffect(()=>{
    generate();
  } ,[length , numAllowed , charAllowed])

  let copyPassw = (e)=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select(); 
  }

  const passwordRef = useRef(null);

  return (
    <>
      <div className="bg-gray-500 h-screen w-full flex justify-center items-center">
        <div className="h-1/2 w-3/5 flex justify-center items-center flex-col rounded-lg ">
          <h1 className="text-xl text-white font-semibold">Password Generator</h1>
          <div className="flex justify-center items-center flex-row">
            <input type="text" ref={passwordRef} value={password} readOnly placeholder="Password" className="outline-none w-full py-1 px-3 rounded"/>
            <button className="py-1 px-7 bg-blue-500 flex justify-center items-center border-solid border-2 border-sky-200 rounded" onClick={(e)=>copyPassw(e)}> Copy </button>
          </div>
          <div className="flex justify-center items-center flex-row">
            <input type="range" name="length" min={4} max={50} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/>
            <label htmlFor="length">length : {length}</label>
          </div>
          <div className="flex justify-center items-center flex-row">
          <label htmlFor="num">Number</label>
            <input type="checkbox" name="num" className="cursor-pointer" defaultChecked={numAllowed}  onChange={()=>
              { setNumAllowed((prev)=>!prev) }}/>
          </div>
          <div className="flex justify-center items-center flex-row">
          <label htmlFor="char">Character</label>
            <input type="checkbox" name="char" className="cursor-pointer" defaultChecked={charAllowed}  onChange={()=>
              { setcharAllowed((prev)=>!prev) }}/>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default App;

import React from 'react';
import { useState } from "react";

function Header() {
   let [user , setName] = useState({name:"John" , age:0});
   const INPUT =()=>{
    setName({name:"jay" , age:18});
   }
   const OUTPUT =()=>{
    setName({name:"John" , age:999});
   }
   let data = [1 , 2 , 3 ,4 ,5];
   let list = data.map((element)=>{
        return <li>{element}</li>
   })
    return(
        <header>
             <h1>{user.name +" "+ user.age}</h1>
             <button onClick={INPUT}> Add</button>
             <button onClick={OUTPUT}> sub</button>
             <ul>
             {list}
             </ul>
        </header>
    )
}
export default Header;
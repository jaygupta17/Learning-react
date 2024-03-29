import { useState } from "react"
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

const Addtodo = () => {

   const [input, setInput] = useState('')
   const dispatch = useDispatch()

   const handleClick = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
   }

  return (
    <form action="" className="h-[20vh] w-full flex items-center justify-center gap-x-3 text-white">
        <input 
            type="text"
            className="h-[30%] w-[35%] text-red-700"
            onChange={e=>setInput(e.target.value)}
            value={input}
        />
        <button
            type="submit"
            className="h-[30%] w-[7%]"
            onClick={handleClick}
        >
            Add    
        </button>
    </form>
  )
}

export default Addtodo

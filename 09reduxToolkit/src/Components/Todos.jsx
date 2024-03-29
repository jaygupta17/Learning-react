import { useSelector,useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice"

const Todos = () => {
  
  const todos =  useSelector(state=>state.todos)
  const dispatch = useDispatch()

  return (
    <div className="h-[70vh] w-full flex flex-col  items-center gap-y-3 text-white">
      <h1>Todos</h1>
    
      {todos.map((todo)=>(
          // eslint-disable-next-line react/jsx-key
          <div className="rounded-lg bg-[#ffffff10] h-[10vh] w-[45%] flex justify-center items-center">
        <li key={todo.id} className="text-xl w-[90%] h-full text-white flex justify-between items-center">
            <h1>{todo.text}</h1>
            <button
                onClick={()=>dispatch(removeTodo(
                    todo.id
                ))}
            >
                Delete
            </button>
        </li>
        </div>
      ))}
      
    </div>
  )
}

export default Todos

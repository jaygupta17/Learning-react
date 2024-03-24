import { useState , useContext} from "react"
import { UserContext } from "../Contexts/UserContext"

function Login() {
    const [Uname, setUname] = useState('')
    const [passw, setpassw] = useState('')
    const {setuser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setuser({Uname , passw}) // now this data is available to all child component globally [that comes under usercontextprovider tag]
    }
  return (
    <div className="h-[50%] w-full bg-red-400">
        <div>Login</div>
        <input
        type="text" 
        value={Uname}
        onChange={(e)=>setUname(e.target.value)}
        />
        <input
        type="password" 
        value={passw}
        onChange={(e)=>setpassw(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
    
  )
}

export default Login
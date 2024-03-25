import { useRef , useState } from "react"

function Login() {

  // User Data
  const [uname, setuname] = useState("ddd");
  const [passw, setpassw] = useState("ddf");
  const [email, setemail] = useState("Dd");

  //Handle Submit
  const handleSubmit = (e) =>{
    e.preventDefault();
    setuname(unameInp.current?.value)
    setemail(emailInp.current?.value)
    setpassw(passInp.current?.value)
  }

  //References of Input Fields
  const unameInp = useRef();
  const emailInp = useRef();
  const passInp = useRef();

  return (
    <div className="flex flex-col gap-y-4 justify-center items-center h-[90vh] text-slate-100 font-extrabold text-xl bg-neutral-700">
     <form className="flex justify-center items-center flex-col gap-y-2">   
        <h1 className="my-2">Sign up</h1>
        <input 
          className="rounded-lg text-xl text-gray-100 font-semibold bg-neutral-800 px-2 py-2"
          type="text" 
          placeholder="Username"
          ref={unameInp} 
        />
        <input 
          className="rounded-lg text-xl text-gray-100 font-semibold bg-neutral-800 px-2 py-2"
          type="email" 
          placeholder="Email"
          ref={emailInp} 
        />
        <input 
          className="rounded-lg text-xl text-gray-100 font-semibold bg-neutral-800 px-2 py-2"
          type="password" 
          placeholder="Password"
          ref={passInp} 
        />
        <button onClick={(e)=>handleSubmit(e)} className="rounded-md my-5 px-4 py-1 w-full bg-red-600 font-semibold font-mono text-md text-white">Sign up</button>
     </form>
    </div>
  )
}

export default Login
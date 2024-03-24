// import { useEffect , useState } from "react";
import { useLoaderData } from "react-router-dom";

export const gitInfo =async ()=>{
  const res = await fetch('https://api.github.com/users/jaygupta17')
  return res.json()
}

function Github() {
  // const [Data, setData] = useState({});
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/jaygupta17')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     setData(data)
  //   })
  // } , [])
  const Data = useLoaderData() // loader at main.jsx
  return (
    <div className="h-[80%] w-full flex justify-center items-center bg-neutral-900 ">
      <div className="flex justify-center items-center h-full w-[80%] gap-x-4 sm:flex-col md:flex-row">
      <div className="h-full flex justify-end items-center">
        <img className="rounded-[50%] sm:scale-50 md:scale-90" src={Data.avatar_url} alt="Jay G's Image"/>
      </div>
      <div className="h-full flex flex-col justify-center items-start text-white">
        <h1>Username : {Data.login}</h1>
        <h1>Name : {Data.name}</h1>
        <h1>College : {Data.company}</h1>
        <h1>Followers : {Data.followers}</h1>
        <h1>Location : {Data.location}</h1>
        <h1>Public Repos : {Data.public_repos}</h1>
        <button className="my-4">
          <a className="block w-full h-full bg-red-600 px-3 py-1 rounded-md hover:bg-red-700 font-semibold" href={"https://github.com/"+Data.login} target="_blank" rel="noopener noreferrer">
            Visit profile
          </a>
        </button>
      </div>
      </div>
    </div>
  )
}

export default Github


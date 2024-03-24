import {NavLink } from "react-router-dom"

function Header() {
  return (
        <div className="bg-neutral-800 md:h-[10vh] w-full flex justify-between items-center sm:flex-col md:flex-row sm:h[20%]">
            <div className="text-xl font-semibold text-gray-100 w-[15%] flex justify-center items-center"> 
                Jay G
            </div>
            <ul className="w-[35%] text-gray-300 flex justify-evenly items-center sm:text-2">
                <li>
                    <NavLink to="/" className={({isActive})=>`font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${isActive? "text-red-500": "text-gray-200"}`}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive})=>`font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${isActive? "text-red-500": "text-gray-200"}`}>
                        About
                    </NavLink>                   
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive})=>`font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${isActive? "text-red-500": "text-gray-200"}`}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/github" className={({isActive})=>`font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${isActive? "text-red-500": "text-gray-200"}`}>
                        Github
                    </NavLink>                    
                </li>
                <li>
                    <NavLink to="/user" className={({isActive})=>`font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${isActive? "text-red-500": "text-gray-200"}`}>
                        User
                    </NavLink> 
                </li>
             
             
            </ul>
            <div className="md:w-[15%] h-[50%] flex justify-center items-center sm:w-full">
                <button className="bg-red-500 rounded-md w-[50%] h-full text-white font-mono font-semibold flex justify-center items-center hover:bg-red-600">Log in</button>
            </div>
        </div>
  )
}

export default Header
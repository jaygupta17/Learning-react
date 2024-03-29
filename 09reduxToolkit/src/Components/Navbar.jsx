const Navbar = () => {
  return (
       <div className="bg-gradient-to-r to-[#ff3d3d57] via-[#ff313194] from-[#ff5d5d] md:h-[10vh] w-full flex justify-between items-center sm:flex-col md:flex-row sm:h[20%]">
            <div className="text-xl font-semibold text-gray-100 w-[15%] flex justify-center items-center"> 
                Jay G
            </div>
            <ul className="w-[35%] text-gray-300 flex justify-evenly items-center sm:text-2">
                <li>
                    Home
                </li>
                <li>
                    About                
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Git              
                </li>
                <li>
                    Projects
                </li>
             
             
            </ul>
            <div className="md:w-[15%] h-[50%] flex justify-center items-center sm:w-full">
                <button className="bg-red-500 rounded-md w-[50%] h-full text-white font-mono font-semibold flex justify-center items-center hover:bg-red-600">Log in</button>
            </div>
        </div>
  )
}

export default Navbar

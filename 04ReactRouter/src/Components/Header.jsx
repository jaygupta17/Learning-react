function Header() {
  return (
        <div className="bg-neutral-800 md:h-[10%] w-full flex justify-between items-center sm:flex-col md:flex-row sm:h[20%]">
            <div className="text-xl font-semibold text-gray-100 w-[15%] flex justify-center items-center"> 
                Jay G
            </div>
            <ul className="w-[35%] text-gray-300 flex justify-evenly items-center sm:text-2">
                <li dir="ltr"><a href="" className="text-white font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">Home</a></li>
                <li><a href="" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">About</a></li>
                <li><a href="" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Contact</a></li>
                <li><a href="" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Github</a></li>
            </ul>
            <div className="md:w-[15%] h-[50%] flex justify-center items-center sm:w-full">
                <button className="bg-red-500 rounded-md w-[50%] h-full text-white font-mono font-semibold flex justify-center items-center hover:bg-red-600">Log in</button>
            </div>
        </div>
  )
}

export default Header
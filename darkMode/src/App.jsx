import Card from "./Components/Card"
import Toggle from "./Components/Toggle"
import { ThemeProvider } from "./Contexts/ThemeContext"
import { useState , useEffect} from "react";
function App() {
  const [theme, settheme] = useState("light")
  const darkTheme = ()=>{
    settheme('dark')
  }
  const lightTheme = ()=>{
    settheme('light')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('dark' , 'light')
    document.querySelector('html').classList.add(theme)
  }, [theme])
  
  return (
    <ThemeProvider value={{theme , darkTheme , lightTheme}}>
    <div className="bg-neutral-500 h-screen flex justify-center items-center flex-col">
     
     <Toggle/>
      <Card/>
    </div>
     </ThemeProvider>
  )
}

export default App

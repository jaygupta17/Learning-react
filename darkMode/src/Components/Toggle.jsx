import useTheme from "../Contexts/ThemeContext"

function Toggle() {
    const {theme ,darkTheme, lightTheme } = useTheme()
    const onChangebtn = ()=>{
         if (theme==='dark') {
            lightTheme()
         } else {
            darkTheme()
         }
    }
  return (
    <input type="checkbox" 
    onChange={onChangebtn} 
    checked={theme==='dark'}/>
    )
}


export default Toggle
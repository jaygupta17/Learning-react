import Addtodo from "./Components/Addtodo"
import Navbar from "./Components/Navbar"
import Todos from "./Components/Todos"

const App = () => {
  return (
    <div className="h-screen bg-neutral-900">
      <Navbar/>
      <Addtodo/>
      <Todos/>
    </div>
  )
}

export default App

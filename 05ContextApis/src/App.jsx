import Login from "./Components/Login"
import Profile from './Components/Profile'
import UserContextprovider from "./Contexts/UserContextprovider"

function App() {
  return (
    <div className="h-screen bg-red-500">
     <UserContextprovider>
      <Login/>
      <Profile/>
     </UserContextprovider>
    </div>
  )
}

export default App

import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./Page/Login";
import Home from "./Component/Home";
function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-blue-400">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './views/Home'
import Navbar from './components/Navbar'
import MyTurnsPresent from './views/MyTurnsPresent';
import SubNavBar from './components/SubNavBar';
import Login from "./views/Login"
import Register from './views/Register';

function App() {
  return (
    <>
    {/* <Register/> */}
    {/* <Login/>  */}
     <Navbar/>
    <Routes>
      {/* <Route path='/' element={<Register/>}/> */}
      {/* <Route path='/' element={<Login/>}/> */}
      <Route path='/home' element={<Home/>}/>
      <Route path='/turns' element={<MyTurnsPresent/>}/>
    </Routes>

     {/* <SubNavBar/> */}

    </>
  )
}

export default App;

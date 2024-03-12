import './App.css'
import {Routes, Route, useLocation} from "react-router-dom"
import Home from './views/Home'
import Navbar from './components/Navbar'
import MyTurnsPresent from './views/MyTurnsPresent';
import SubNavBar from './components/SubNavBar';
import Login from "./views/Login"
import Register from './views/Register';
import ErrorPage from './views/ErrorPage';

function App() {
  const location = useLocation()
  return (
    <>
     {location.pathname === "/" | location.pathname === "/register" ?  null : <Navbar/> }
     {location.pathname === "/" | location.pathname === "/register" ?  null : <SubNavBar/>}
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/turns' element={<MyTurnsPresent/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>

     {/* <SubNavBar/> */}

    </>
  )
}

export default App;

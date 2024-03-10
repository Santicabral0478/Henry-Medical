import './App.css'
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
    {/* <Login/> */}
     <Navbar/>
     <SubNavBar/>
     <Home/>

     <MyTurnsPresent/>
    </>
  )
}

export default App;

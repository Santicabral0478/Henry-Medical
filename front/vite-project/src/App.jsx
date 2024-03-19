// App.jsx
import './App.css'
import { Routes, Route, useLocation } from "react-router-dom"
import Home from './views/Home'
import Navbar from './components/Navbar'
import MyTurnsPresent from './views/MyTurnsPresent';
import SubNavBar from './components/SubNavBar';
import Login from "./views/Login"
import Register from './views/Register';
import ErrorPage from './views/ErrorPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import RegisterTurn from './views/RegisterTurn';

function App() {
  const location = useLocation()
  return (
    <Provider store={store}> 
      <>
        {location.pathname === "/" | location.pathname === "/register" ? null : <Navbar />}
        {location.pathname === "/" | location.pathname === "/register" ? null : <SubNavBar />}
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/turns' element={<MyTurnsPresent />} />
          <Route path='/newturn' element={<RegisterTurn/>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </>
    </Provider>
  )
}

export default App;

// v1
import './App.css'
import Home from './views/Home'
import Navbar from './components/Navbar'
import MyTurnsPresent from './views/MyTurnsPresent';

function App() {
  return (
    <>
     <Navbar/>
     <Home/>

     <MyTurnsPresent/>
    </>
  )
}

export default App;

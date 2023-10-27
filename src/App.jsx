import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/HomePage'
import AboutUS from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import Signup from './Pages/Signup'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>} ></Route>
        <Route path='/about' element={<AboutUS/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
        
        
        <Route path='*' element={<NotFound/>} ></Route>

      </Routes>
    </>
  )
}

export default App

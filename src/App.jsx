import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/HomePage'
import AboutUS from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import CourseList from './Pages/Course/CourseList'
import Contact from './Pages/Contact'
import Denied from './Pages/Denied'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>} ></Route>
        <Route path='/about' element={<AboutUS/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/courses' element={<CourseList/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/denied' element={<Denied/>} ></Route>
        
        
        <Route path='*' element={<NotFound/>} ></Route>

      </Routes>
    </>
  )
}

export default App

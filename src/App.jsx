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
import CoueseDescription from './Pages/Course/CourseDescription'
import RequireAuth from './Components/Auth/RequireAuth'
import CreateCourse from './Pages/Course/CreateCourse'
import Profile from './Pages/User/Profile'
import EditProfile from './Pages/User/EditProfile'
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
        <Route path='/courses/description' element={<CoueseDescription/>} ></Route>
        
        <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
            <Route path='/course/create' element={<CreateCourse/>} ></Route>
        </Route>
        <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]}/>}>
            <Route path='user/profile' element={<Profile/>}></Route>
            <Route path='user/editprofile' element={<EditProfile/>}></Route>
        </Route>

        
        <Route path='*' element={<NotFound/>} ></Route>

      </Routes>
    </>
  )
}

export default App

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
import Checkout from './Pages/Payment/Checkout'
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess'
import CheckoutFailure from './Pages/Payment/CheckoutFailure'
import Displaylectures from './Pages/Dashboard/Displaylecture'
import Addlecture from './Pages/Dashboard/Addlecture'
import AdminDashboard from './Pages/Dashboard/AdminDashbord'
import ForgetPass from './Pages/User/ForgetPass'
import ResetPass from './Pages/User/ResetPass'
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
        <Route path='/forgetpassword' element={<ForgetPass/>}></Route>
        <Route path='/reset-password/:resetToken' element={<ResetPass/>}></Route>
        <Route path='/courses/description' element={<CoueseDescription/>} ></Route>
        
        <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
            <Route path='/course/create' element={<CreateCourse/>} ></Route>
            <Route path='/course/addlecture' element={<Addlecture/>}></Route>
            <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>
        </Route>
        <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]}/>}>
            <Route path='/user/profile' element={<Profile/>}></Route>
            <Route path='/user/editprofile' element={<EditProfile/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/checkout/success' element={<CheckoutSuccess/>}></Route>
            <Route path='/checkout/failure' element={<CheckoutFailure/>}></Route>
            <Route path='/course/displaylecture' element={<Displaylectures/>}></Route>
        </Route>

        
        <Route path='*' element={<NotFound/>} ></Route>

      </Routes>
    </>
  )
}

export default App

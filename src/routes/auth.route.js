import Home from "../pages/LandingPage/Home/Home";
import { LoginUser } from "../pages/loginUser/loginUser";
//import  RegisterUser  from "../pages/registerUser/registerUser";
import {RegisterSchool} from '../pages/registerUser/registerSchool';

const authRoutes =[
    {
        path:'/',
        element : <Home/>,
        title : 'Home'
    },
    {
        path:'/login',
        element : <LoginUser/>,
        title : 'Home'
    },
    {
        path:'/register',
        element : <RegisterSchool/>,
        title : 'Register'
    }
]
export default authRoutes;
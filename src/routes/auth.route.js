import Home from "../pages/LandingPage/Home/Home";
import { LoginUser } from "../pages/loginUser/loginUser";
import  RegisterUser  from "../pages/registerUser/registerUser";

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
        element : <RegisterUser/>,
        title : 'Register'
    }
]
export default authRoutes;
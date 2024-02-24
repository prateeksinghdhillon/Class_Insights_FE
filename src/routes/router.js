import { Routes,Route } from "react-router-dom"
import authRoutes from "./auth.route"

export const Router = () => {
    const pageRoutes=authRoutes.map(({path,element,title})=>{
        return <Route key={title} path={`/${path}`} element={element}></Route>
    })
    return <Routes>{pageRoutes}</Routes>
}
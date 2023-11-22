import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Details from "../pages/Details/Details"
import { PrivateRout, ProtectedRout } from "./PrivateRouts"
import { PublicRout } from "./PublicRouts"
import Account from "../pages/Account/Account"
import AdmDashboard from "../pages/AdmDashboard/AdmDashboard"
export const RoutesMain = () => {
    return (
        <Routes>
            <Route element={<PublicRout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Home/>} />
                <Route path="/hotel/:id" element={<Details/>} />


                <Route element={<ProtectedRout/>}>
                    <Route path="/user" element={<Account/>} />


                    <Route  element={<PrivateRout/>}>
                        <Route path="/adm/dashboard" element={<AdmDashboard/>} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    )
}
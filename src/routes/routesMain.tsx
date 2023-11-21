import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Details from "../pages/Details/Details"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Home/>} />
            <Route path="/hotel/:id" element={<Details/>} />


        </Routes>
    )
}
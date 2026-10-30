import { Routes, Route, Navigate } from "react-router-dom"
import Header from "./Header"
import Login from "./Login"
import Home from "./Home"
import Cart from "./Cart"


function Myrouter() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Route>
        </Routes>
    )
}

export default Myrouter
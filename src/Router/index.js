import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginCard } from "../components/LoginCard"
import { WalletAccount } from "../components/WalletAccount"

export const Routess=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/home" exact element={<LoginCard/>} />
            <Route path="/wallet" element={<WalletAccount/>} />
        </Routes>
        </BrowserRouter>
    )
}
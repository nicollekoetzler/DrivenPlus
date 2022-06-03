import "../assets/css/reset.css";
import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import UserContext from "../contexts/UserContext";

import TelaHome from "./TelaHome";
import TelaLogin from "./TelaLogin";
import TelaSignUp from "./TelaSignUp";
import TelaSubscriptionsId from "./TelaSubscriptionsId";
import TelaSubscriptions from "./TelaSubscriptions";

export default function App() {
    const [infosUsuario, setInfosUsuario] = useState({});

    return(
        <UserContext.Provider value={{infosUsuario, setInfosUsuario}} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/sign-up" element={<TelaSignUp />} />
                    <Route path="/subscriptions" element={<TelaSubscriptions />} />
                    <Route path="/subscriptions/:ID_DO_PLANO" element={<TelaSubscriptionsId />} />
                    <Route path="/home" element={<TelaHome />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}
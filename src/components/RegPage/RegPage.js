import React from "react";
import "./reg.scss"
import {NavLink, useLocation} from "react-router-dom";


const Reg = () => {
    const location = useLocation();
    const isLogin = location.pathname === "/reg"
    console.log(isLogin);

    return (
            <div className="logpage">
                <h1>Регистрация</h1>
                 <form>
                     <input type="text" placeholder="Введите Login"/>
                     <input type="password" placeholder="Введите password"/>
                     <button className="auth-btn">
                         {
                             isLogin
                                 ?  "Регистрация"
                                 :  "Авторизация"
                         }
                     </button>
                     <NavLink to="/login">Есть Аккаунт? Войти</NavLink>
                 </form>
            </div>
    )
}

export default Reg;

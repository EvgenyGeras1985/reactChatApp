import "./login.scss";
import React from "react";
import {NavLink, useLocation} from "react-router-dom";


const Login = () => {
    const location = useLocation();
    const isLogin = location.pathname === "/login"
    console.log(isLogin);

    return (
            <div className="logpage">
                <form>
                    <input type="text" placeholder="Введите Login"/>
                    <input type="password" placeholder="Введите password"/>
                    <button className="auth-btn">
                        {isLogin ? "Авторизоваться" : "Зарегестрироваться"}
                    </button>
                    <NavLink to="/reg">Нет Аккаунта? Регистрация</NavLink>
                </form>
            </div>
    )
}

export default Login;

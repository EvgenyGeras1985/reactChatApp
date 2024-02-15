import React from "react";
import "./login.scss"

export default class Login extends React.Component{

    render(){
        return(
            <div className="logpage">
                <form>
                    <input  type="text" placeholder="Введите Login"/>
                    <input  type="password" placeholder="Введите password"/>
                    <button className="auth-btn">Авторизоваться</button>
                    <button className="reg-btn">Зарегестрироваться</button>
                </form>
            </div>
        )
    }
}
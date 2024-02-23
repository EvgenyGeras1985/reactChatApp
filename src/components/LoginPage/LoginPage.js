import "./login.scss"
import React from "react";
import {NavLink} from "react-router-dom";

export default class RegistrationPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = { isLogin: false }
    }

    render(){
        return(
            <div class="login">
                {
                    this.state.isLogin
                        ? <h1>Регистрация</h1>
                        : <h1>Авторизоваться</h1>
                }
                <section>
                    <form>
                        <input type="text" placeholder="Введите Login"/>
                        <input type="password" placeholder="Введите password"/>
                        <button className="log-btn">Войти</button>
                        <NavLink className="log-lnk" to="/reg">Нет аккаунта? Регистрируйся</NavLink>
                    </form>
                </section>
            </div>
        )
    }
}

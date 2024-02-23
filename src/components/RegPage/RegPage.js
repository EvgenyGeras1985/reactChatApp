import "./reg.scss"
import React from "react";
import {NavLink} from "react-router-dom";

export default class RegistrationPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = { isLogin: true }
    }

    render(){
        return(
            <div class="registration">
                {
                    this.state.isLogin
                        ? <h1>Регистрация</h1>
                        : <h1>Авторизоваться</h1>
                }
                <section>
                    <form>
                        <input type="text" placeholder="Введите Login"/>
                        <input type="password" placeholder="Введите password"/>
                        <button className="reg-btn">Зарегестрироваться</button>
                        <NavLink className="reg-lnk" to="/login">Есть Аккаунт? Войти</NavLink>
                    </form>
                </section>
            </div>
        )
    }
}



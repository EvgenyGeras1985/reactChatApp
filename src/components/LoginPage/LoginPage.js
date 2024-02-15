import React from "react";
import "./login.module.scss"

export default class Login extends React.Component{
    render(){
        return(
            <>
                <form>
                    <input type="text" placeholder="Введите Login"/>
                    <input type="password" placeholder="Введите pass"/>
                    <button>Авторизоваться</button>
                    <button>Зарегестрироваться</button>
                </form>
            </>
        )
    }
}
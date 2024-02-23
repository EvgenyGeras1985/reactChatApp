import "./nav.module.scss.css";
import React, {Fragment} from "react";
import {Link} from "react-router-dom";


class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = { isLogin: true }
    }


    render(){

        return (
            <Fragment>
                <nav className="header">
                    <h2>React Chat</h2>
                    <Link className="lnk-main" to="/">Главная</Link>
                    {
                        this.state.isLogin
                        ? <Link className="lnk-profile" to="/profile">Личный кабинет</Link>
                        : <></>
                    }
                    {
                        this.state.isLogin
                        ? <Link className="lnk" to="/login">Выйти</Link>
                        : <Link className="lnk" to="/login">Войти</Link>
                    }
                </nav>
            </Fragment>
        )
    }
}

export default Navigation;
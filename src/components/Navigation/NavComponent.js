import React, {Fragment} from "react";
import "./nav.module.scss.css";
import {Link} from "react-router-dom";


class Navigation extends React.Component{

    render(){
        return (
            <Fragment>
                <nav className="header">
                    <h2>React Chat</h2>
                    <Link className="lnk-main" to="/">Главная</Link>
                    <Link className="lnk" to="/auth">Войти</Link>
                </nav>
            </Fragment>
        )
    }
}

export default Navigation;
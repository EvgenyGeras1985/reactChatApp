import React from "react";
import './nav.module.scss.css';
import ButtonEnter from "../ButtonEnter/buttonEnter";
class Navigation extends React.Component{
    render(){
        return <nav className="header">
                    <h2>React Chat</h2>
                    <ButtonEnter></ButtonEnter>
                </nav>
    }
}

export default Navigation;
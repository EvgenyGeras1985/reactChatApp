import React, {Fragment} from "react";
import Navigation from "../Navigation/NavComponent";
import {Outlet} from "react-router-dom";

export default class Layout extends React.Component{
    render(){
        return (
            <Fragment>
                <Navigation />
                <Outlet />
            </Fragment>
        )
    }
}
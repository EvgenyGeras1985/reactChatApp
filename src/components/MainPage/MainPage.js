import React, {Fragment} from "react";
import "./main.module.scss";

export default class Main extends React.Component{
    render(){
        return(
            <Fragment>
                <article className="description">
                    <div>Вас приветствует</div>
                    <div>React</div>
                    <div>Chat</div>
                </article>
            </Fragment>
        )
    }
}
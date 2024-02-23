import "./main.module.scss";
import React, {Fragment} from "react";


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
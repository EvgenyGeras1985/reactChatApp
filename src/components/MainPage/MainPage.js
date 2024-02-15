import React, {Fragment} from "react";
import "./main.module.scss.css";

class Main extends React.Component{
    render(){
        return(
            <Fragment>
                <article className="description">
                    <div>Вас приветствует</div>
                    <div>React</div>
                    <div>Chat</div>
                </article>
            </Fragment>
        );
    }
}

export default Main;
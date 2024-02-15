import React, {Fragment} from "react";
import "./app.scss";
import Navigation from "../Navigation/NavComponent";


class App extends React.Component{
  render(){
    return (
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


export default App;

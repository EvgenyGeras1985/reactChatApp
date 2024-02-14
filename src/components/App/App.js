import React from "react";
import '../../assets/App.scss';
import "./app.module.scss.css";
import Navigation from "../Navigation/NavComponent";

class App extends React.Component{
  render(){
    return (
        <>
          <Navigation />
          <article className="description">
            <div>Вас приветствует</div>
            <div>React</div>
            <div>Chat</div>
          </article>
        </>
    )
  }
}

export default App;

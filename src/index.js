import './assets/index.scss.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import Test from "./components/TastPage/Test";
import Navigation from "./components/Navigation/NavComponent";
import Login from "./components/LoginPage/LoginPage";
import Auth from "./components/Auth/AuthPage";
import Error from "./components/ErrorPage/Error";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Navigation />
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="login" element={<Login />} />
              <Route path="test" element={<Test />} />
              <Route path="*" element={<Error />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);



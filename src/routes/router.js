import {createBrowserRouter} from "react-router-dom";
import Main from "../components/MainPage/MainPage";
import ErrorPage from "../components/ErrorPage/Error";
import Layout from "../components/Layout/Layout.js";
import Test from "../components/TastPage/Test";
import LoginPage from "../components/LoginPage/LoginPage";
import RegPage from "../components/RegPage/RegPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'reg',
                element: <RegPage />
            },
            {
                path: 'test',
                element: <Test />
            },
        ]
    }
])
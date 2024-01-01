import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import LoginPage from "../features/login/login.page.tsx";

export const routes = createBrowserRouter([
    {path: '',
    element: <App />
    },
    {
        path:'/login',
        element: <LoginPage />
    }
])

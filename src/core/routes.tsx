import {createBrowserRouter, Outlet} from "react-router-dom";
import App from "../App.tsx";
import LoginPage from "../features/login/ui/login.page.tsx";
import styles from "./routes.module.css"

export const routes = createBrowserRouter([
    {path: '',
    element:
        <div className={styles.template}>
            <Outlet />,
        </div>,
        children: [{
            path: '',
            element: <App />
        },
            {
                path:'/login',
                element: <LoginPage />
            }]
    },

])

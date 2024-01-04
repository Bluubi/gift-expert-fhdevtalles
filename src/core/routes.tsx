import {createBrowserRouter, Outlet} from "react-router-dom";
import App from "../App.tsx";
import styles from "./routes.module.css"
import PageComponent from "../features/page/page.component.tsx";
import {GiphModel} from "../features/giph/domain/giph-model.ts";
import {Paginate} from "./utils.ts";

export const routes = createBrowserRouter([
    {path: '',
    element:
        <div className={styles.template}>
            <Outlet />,
        </div>,
        children: [{
            path: '',
            element: <App />,
            children: [
                {
                    path: 'page/:id',
                    element: <PageComponent />,
                    loader: async ({ params}): Promise<GiphModel[]> => {
                        return Paginate(params);
                    },
                }
            ]
        },
        ]
    },
])

import {useContext} from "react";
import {LoginContext} from "../../App.tsx";
import YourFavourites from "../your-favorites/your-favourites.component.tsx";

export default function HeaderComponent() {

    const logged = useContext(LoginContext);

    return (
        <header>
            { logged ? <YourFavourites /> : <></> }
        </header>
    )
}

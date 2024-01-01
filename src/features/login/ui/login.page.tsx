import {FieldValues, FormProvider, useForm} from "react-hook-form";
import {createContext, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {SnackbarErrorComponent} from "../../../../lib/snackbar-error/snackbar-error.component.tsx";
import styles from './login.module.css'
import unsplash from '@alias/docs/salmen-bejaoui-beautiful-landscape.jpg'
import UsernameController from "../../username-controller/ui/username-controller.component.tsx";
import FormComponent from "../../../../lib/form/form.component.tsx";
import PasswordController from "../../password-controller/password-controller.component.tsx";
import FormTitleComponent from "../../../../lib/form/title/form-title.component.tsx";

export const LoginContext = createContext(false)


export type FormLogin = {
    username: string,
    password: string
}
export default function LoginPage(){

    const methods = useForm();
    const [logged, setLogged] = useState(false);
    const snackbar = useRef<{display: (applyStyle: string) => void}>(null);

    const navigate = useNavigate();

    useEffect(() => {
        if(logged){
            navigate('..')
        } else {
            }
    }, [logged, navigate])

    function login(data: FieldValues){
        const username = localStorage.getItem(data.username);
        if(username === null){
            setLogged(false)
            snackbar.current!.display('block')
        } else {
            snackbar.current!.display('none')
            setLogged(true)
        }
    }

    return (

        <LoginContext.Provider value={logged}>
            <div className={styles.container}>
                <FormProvider {...methods}>
                    <div className={styles.imageContainer}>
                        <img src={unsplash} alt={''} className={styles.image}/>
                    </div>

                    <FormComponent callback={(data: FieldValues) => login(data)}>
                        <FormTitleComponent size={"1"} text={"Welcome to login"}></FormTitleComponent>
                        <UsernameController />
                        <PasswordController />
                        <button> Login </button>
                    </FormComponent>

                    <SnackbarErrorComponent ref={snackbar} />
                </FormProvider>
            </div>

        </LoginContext.Provider>

    )
}

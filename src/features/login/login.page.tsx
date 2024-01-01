import {FieldValues, FormProvider, useForm} from "react-hook-form";
import ControlComponent from "../../core/shared/form/control.component.tsx";
import {createContext, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {SnackbarErrorComponent} from "../../core/shared/snackbar-error/snackbar-error.component.tsx";
import styles from './login.module.css'
import unsplash from '@alias/docs/salmen-bejaoui-beautiful-landscape.jpg'

export const LoginContext = createContext(false)


export type FormLogin = {
    username: string,
    password: string
}
export default function LoginPage(){

    const methods = useForm();
    const [logged, setLogged] = useState(false);
    const snackbar = useRef<{display: (applyStyle: string) => void}>(null);

    const { handleSubmit } = methods;
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
                    <form className={styles.form} onSubmit={handleSubmit((data) => { login(data)})}>
                        <h1> Welcome to login page </h1>
                        <ControlComponent name={'username'} type={'text'}>
                            <label> Username </label>
                        </ControlComponent>
                        <ControlComponent name={'password'} type={'password'}>
                            <label> Password </label>
                        </ControlComponent>
                        <button> Login </button>
                    </form>
                    <SnackbarErrorComponent ref={snackbar} />
                </FormProvider>
            </div>

        </LoginContext.Provider>

    )
}

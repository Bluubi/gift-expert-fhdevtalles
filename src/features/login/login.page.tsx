import {FieldValues, FormProvider, useForm} from "react-hook-form";
import ControlComponent from "./password.component.tsx";
import {createContext, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {SnackbarErrorComponent} from "../../core/shared/snackbar-error/snackbar-error.component.tsx";

export const LoginContext = createContext(false)


export type FormLogin = {
    username: string,
    password: string
}
export default function LoginPage(){

    const methods = useForm();
    const [logged, setLogged] = useState(false);
    const snackbar = useRef<{display: (applyStyle: string) => void}>(null);

    const { handleSubmit, register } = methods;
    const navigate = useNavigate();

    useEffect(() => {
        if(logged){
            navigate('..')
        } else {
            navigate('..')
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
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit((data) => { login(data)})}>
                    <h1> Welcome to login page </h1>
                    <label> Username </label>
                    <input type={'text'} { ...register('username')}/>
                    <ControlComponent name={'password'} type={'password'}>
                        <label> Password </label>
                    </ControlComponent>
                    <button> Login </button>
                </form>
                <SnackbarErrorComponent ref={snackbar} />
            </FormProvider>
        </LoginContext.Provider>

    )
}

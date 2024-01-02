import {FieldValues, FormProvider, useForm} from "react-hook-form";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {SnackbarErrorComponent} from "../../../../lib/snackbar-error/snackbar-error.component.tsx";
import styles from './login.module.css'
import unsplash from '@assets/docs/salmen-bejaoui-beautiful-landscape.jpg'
import UsernameController from "../../username-controller/ui/username-controller.component.tsx";
import PasswordController from "../../password-controller/password-controller.component.tsx";
import FormTitleComponent from "../../../../lib/form/title/form-title.component.tsx";

export default function LoginPage(){

    const methods = useForm();
    const { handleSubmit } = methods;

    const [logged, setLogged] = useState(false);
    const snackbar = useRef<{display: (applyStyle: string) => void}>(null);

    const navigate = useNavigate();

    useEffect(() => {
        if(logged){
            navigate('..')
        }
    }, [logged, navigate])

    function login(data: FieldValues){
        const username = localStorage.getItem(data.username);
        if(username === null){
            setLogged(false)
            snackbar.current!.display('flex')
        } else {
            snackbar.current!.display('none')
            setLogged(true)
        }
    }

    return (

            <div className={styles.container}>
                <FormProvider {...methods}>
                    <div className={styles.imageContainer}>
                        <img src={unsplash} alt={''} className={styles.image}/>
                        <form onSubmit={handleSubmit((data) =>login(data))} className={styles.form}>
                            <FormTitleComponent size={"1"} text={"Welcome to login"}></FormTitleComponent>
                            <UsernameController />
                            <PasswordController  />
                            <button className={'buttonLogin'}> Login </button>
                        </form>
                    </div>



                    <SnackbarErrorComponent ref={snackbar} />
                </FormProvider>
            </div>

    )
}

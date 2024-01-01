import {FieldValues, useForm} from "react-hook-form";
import {ComponentProps} from "react";
import styles from './login.module.css'

// export const LoginContext = createContext(false)

export default function LoginPage({callback, props}: { callback:(data: FieldValues) => void, props: ComponentProps<'form'>}) {

    const methods = useForm();

    const {handleSubmit} = methods;

    return (<form className={styles.form} onSubmit={handleSubmit((data) => {
        callback(data)
    })}>
        { props.children}
    </form>)
}

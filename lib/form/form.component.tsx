import {FieldValues, useForm} from "react-hook-form";
import styles from './form.module.css'
import {ComponentProps} from "react";

// export const LoginContext = createContext(false)

type Callback = {
    callback: (data: FieldValues) => void
}

export default function FormComponent({callback, ...props}:  Callback & ComponentProps<'form'>) {

    const methods = useForm();

    const {handleSubmit} = methods;

    return (<form className={styles.form} onSubmit={handleSubmit((data) => {
        callback(data)
    })}>
        { props.children }
    </form>)
}

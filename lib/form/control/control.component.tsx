import {useFormContext} from "react-hook-form";
import {ComponentProps} from "react";
import styles from './control.module.css'

type ControlField = {
    name: string,
    type: 'password' | 'text'
}

export default function ControlComponent({name, type, ...props}: ControlField & ComponentProps<'div'> ){

    const { register } = useFormContext()

    return (
        <div className={`${styles.flex} ${styles.fullWidth}`}>
            { props.children }
            <input {...register(name)} type={type}></input>
        </div>

    )
}

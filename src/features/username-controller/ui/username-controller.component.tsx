import ControlComponent from "../../../../lib/form/control/control.component.tsx";
import {useFormContext} from "react-hook-form";
import styles from './username-controller.module.css'

export default function UsernameController(){
    const { register } = useFormContext()

    return (
        <ControlComponent>
            <label> Username </label>
            <input {...register('username')} type={'text'} className={styles.input}></input>
        </ControlComponent>
    )
}

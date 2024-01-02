import ControlComponent from "../../../lib/form/control/control.component.tsx";
import openEye from "@assets/icons/open-eye.svg";
import closedEye from "@assets/icons/closed-eye.svg";
import styles from "./password-controller.module.css";
import {useFormContext} from "react-hook-form";
import {useState} from "react";

export default function PasswordController(){

    const { register } = useFormContext()
    const [ open, setOpen ] = useState(true);

    function handleClick(){
        setOpen(!open);
    }

    return (
        <ControlComponent>
            <label> Password </label>
            <div className={styles.container}>
                <input {...register('password')} type={open ? 'password' : 'text'}></input>
                <img src={!open ? openEye : closedEye} alt={'icon to show password or not'} className={styles.icon} onClick={handleClick}/>
            </div>
        </ControlComponent>
    )
}



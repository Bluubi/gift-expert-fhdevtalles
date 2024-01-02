import styles from './control.module.css'
import {ComponentProps} from "react";


export type ControlField = {
    name: string,
}
export default function ControlComponent( {...props}: ComponentProps<'div'>){

    return (
        <div className={`${styles.flex} ${styles.fullWidth}`}>
            { props.children }
        </div>

    )
}

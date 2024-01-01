import {forwardRef, useImperativeHandle, useRef} from "react";
import styles from './snackbar-error.module.css'

export const SnackbarErrorComponent = forwardRef<{ display: (applyStyle: string) => void }>((_, ref) => {

    const snackbarRef = useRef<HTMLDivElement | null>(null);
    useImperativeHandle(ref,() => {
        return {
            display(applyStyle: string){
                const snackbar = snackbarRef.current;
                if(snackbar){
                    snackbar.style.display = applyStyle
                }
            }
        };
    }, [])

    return (
        <div ref={snackbarRef} className={styles.snackbar}>
            Ha habido un error
        </div>
    )
})


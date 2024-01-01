import {useFormContext} from "react-hook-form";
import {ComponentProps} from "react";

type ControlField = {
    name: string,
    type: 'password' | 'text'
}

export default function ControlComponent({name, type, ...props}: ControlField & ComponentProps<'div'> ){

    const { register } = useFormContext()

    return (
        <div>
            { props.children }
            <input {...register(name)} type={type}></input>
        </div>

    )
}

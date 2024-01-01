import ControlComponent from "../../../../lib/form/control/control.component.tsx";

export default function UsernameController(){
    return (
        <ControlComponent name={'username'} type={'text'}>
        <label> Username </label>
        </ControlComponent>
    )
}

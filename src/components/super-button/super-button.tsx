import s from './super-button.module.css';
import {Button} from "../../const";

type PropsType = {
    title: Button
    callback: () => void
    disabled: boolean
}

export default function SuperButton ({ title, callback, disabled }: PropsType) {
    return (
        <button
            className={s.btn__default}
            onClick={callback}
            disabled={disabled}
        >
            {title}
        </button>
    )
}
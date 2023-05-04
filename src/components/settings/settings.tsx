import SuperButton from "../super-button/super-button";
import {Button, InputId} from "../../const";
import s from "./settings.module.css";
import {ChangeEvent} from "react";
import {ErrorType} from "../../types/error-type";

type PropsType = {
    minValue: number
    maxValue: number
    counterStep: number
    error: ErrorType
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    setSettings: () => void
}

export default function Settings(props: PropsType) {
    const {
        minValue,
        maxValue,
        counterStep,
        error,
        onChange,
        setSettings,
    } = props;

    const maxStyle = `${s.input} ${error[InputId.MAX] ? s.error : ''}`;
    const minStyle = `${s.input} ${error[InputId.MIN] ? s.error : ''}`;
    const stepStyle = `${s.input} ${error[InputId.STEP] ? s.error : ''}`;

    const isDisabledButton = error[InputId.MAX] || error[InputId.MIN] || error[InputId.STEP];

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
    }

    return (
        <div className={s.wrap}>
            <div className={s.container}>
                <h5>max</h5>
                <input
                    id={InputId.MAX}
                    type="number"
                    className={maxStyle}
                    onChange={onChangeHandler}
                    value={maxValue}
                />
            </div>
            <div className={s.container}>
                <h5>min</h5>
                <input
                    id={InputId.MIN}
                    type="number"
                    className={minStyle}
                    onChange={onChangeHandler}
                    value={minValue}
                />
            </div>
            <div className={s.container}>
                <h5>step</h5>
                <input
                    id={InputId.STEP}
                    type="number"
                    className={stepStyle}
                    onChange={onChangeHandler}
                    value={counterStep}
                />
            </div>
            <SuperButton
                title={Button.SET}
                callback={setSettings}
                disabled={isDisabledButton}
            />
        </div>
    );
}
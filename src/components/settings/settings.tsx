import SuperButton from "../super-button/super-button";
import {Button, InputId} from "../../const";
import s from "./settings.module.css";
import {ChangeEvent} from "react";

type PropsType = {
    minValue: number
    maxValue: number
    counterStep: number
    errorId: InputId
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    setSettings: () => void
}

export default function Settings(props: PropsType) {
    const {
        minValue,
        maxValue,
        counterStep,
        errorId,
        onChange,
        setSettings,
    } = props;

    const maxStyle = `${s.input} ${errorId === InputId.MAX ? s.error : ''}`;
    const minStyle = `${s.input} ${errorId === InputId.MIN ? s.error : ''}`;
    const stepStyle = `${s.input} ${errorId === InputId.STEP ? s.error : ''}`;

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
                disabled={errorId !== InputId.NONE}
            />
        </div>
    );
}
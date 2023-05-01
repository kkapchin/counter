import SuperButton from "../super-button/super-button";
import {Button} from "../../const";
import s from "./settings.module.css";
import {ChangeEvent} from "react";

type PropsType = {
    minValue: number
    maxValue: number
    counterStep: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    setSettings: () => void
}

export default function Settings(props: PropsType) {
    const {
        minValue,
        maxValue,
        counterStep,
        onChange,
        setSettings,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
    }

    return (
        <div className={s.wrap}>
            <div className={s.container}>
                <h5>max</h5>
                <input
                    id="max"
                    type="number"
                    onChange={onChangeHandler}
                    value={maxValue}
                />
            </div>
            <div className={s.container}>
                <h5>min</h5>
                <input
                    id="min"
                    type="number"
                    onChange={onChangeHandler}
                    value={minValue}
                />
            </div>
            <div className={s.container}>
                <h5>step</h5>
                <input
                    id="step"
                    type="number"
                    onChange={onChangeHandler}
                    value={counterStep}
                />
            </div>
            <SuperButton title={Button.SET} callback={setSettings}/>
        </div>
    );
}
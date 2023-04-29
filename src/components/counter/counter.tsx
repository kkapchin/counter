import Header from "../header/header";
import SuperButton from "../super-button/super-button";
import {Button, Value} from "../../const";
import s from "./counter.module.css";
import React from "react";

type PropsType = {
    counter: number
    minValue: number
    maxValue: number
    increaseCounter: () => void
    decreaseCounter: () => void
    resetCounter: () => void
}

export default function Counter(props: PropsType) {
    const { counter,
        minValue,
        maxValue,
        increaseCounter,
        decreaseCounter,
        resetCounter,
    } = props;

    return (
        <div className={s.wrap}>
            <Header
                counter={counter}
                maxValue={maxValue}
            />
            <SuperButton
                title={Button.INCREASE}
                callback={increaseCounter}
                disabled={counter === maxValue}
            />
            <SuperButton
                title={Button.DECREASE}
                callback={decreaseCounter}
                disabled={counter === minValue}
            />
            <SuperButton
                title={Button.RESET}
                callback={resetCounter}
                disabled={counter === Value.DEFAULT}
            />
        </div>
    )
}
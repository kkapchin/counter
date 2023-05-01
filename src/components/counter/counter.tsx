import Header from "../header/header";
import SuperButton from "../super-button/super-button";
import {Button, Notice} from "../../const";
import s from "./counter.module.css";
import React from "react";

type PropsType = {
    counter: number
    minValue: number
    maxValue: number
    notice: Notice
    increaseCounter: () => void
    decreaseCounter: () => void
    resetCounter: () => void
}

export default function Counter(props: PropsType) {
    const { counter,
        minValue,
        maxValue,
        notice,
        increaseCounter,
        decreaseCounter,
        resetCounter,
    } = props;

    return (
        <div className={s.wrap}>
            <Header
                counter={counter}
                maxValue={maxValue}
                minValue={minValue}
                notice={notice}
            />
            <SuperButton
                title={Button.INCREASE}
                callback={increaseCounter}
                disabled={(counter >= maxValue) || (notice !== Notice.DEFAULT)}
            />
            <SuperButton
                title={Button.DECREASE}
                callback={decreaseCounter}
                disabled={(counter <= minValue) || (notice !== Notice.DEFAULT)}
            />
            <SuperButton
                title={Button.RESET}
                callback={resetCounter}
                disabled={(counter === minValue) || (notice !== Notice.DEFAULT)}
            />
        </div>
    )
}
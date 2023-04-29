import Header from "../header/header";
import SuperButton from "../super-button/super-button";
import {Button, Value} from "../../const";
import s from "./counter.module.css";
import React from "react";

type PropsType = {
    counter: number
    increaseCounter: () => void
    decreaseCounter: () => void
    resetCounter: () => void
}

export default function Counter(props: PropsType) {
    const { counter,
        increaseCounter,
        decreaseCounter,
        resetCounter,
    } = props;
    return (
        <div className={s.container}>
            <Header counter={counter}/>
            <SuperButton
                title={Button.INCREASE}
                callback={increaseCounter}
                disabled={counter === Value.MAX}
            />
            <SuperButton
                title={Button.DECREASE}
                callback={decreaseCounter}
                disabled={counter === Value.DEFAULT}
            />
            <SuperButton
                title={Button.RESET}
                callback={resetCounter}
                disabled={counter === Value.DEFAULT}
            />
        </div>
    )
}
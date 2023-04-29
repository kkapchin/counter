import Header from "../header/header";
import SuperButton from "../super-button/super-button";
import {Button, Value} from "../../const";
import React from "react";

type PropsType = {
    counter: number
    increaseCounter: () => void
    decreaseCounter: () => void
}

export default function Counter(props: PropsType) {
    const { counter, increaseCounter, decreaseCounter } = props;
    return (
        <>
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
        </>
    )
}
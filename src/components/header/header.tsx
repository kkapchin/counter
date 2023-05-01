import React from "react";
import s from './header.module.css';

type PropsType = {
    counter: number
    maxValue: number
    minValue: number
}

export default function Header({ counter, maxValue, minValue }: PropsType) {

    const style = `${s.main__header} ${(counter >= maxValue || counter < minValue) && s.red}`;

    return (
        <h1 className={style}>{counter}</h1>
    )
}

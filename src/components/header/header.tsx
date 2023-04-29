import React from "react";
import s from './header.module.css';

type PropsType = {
    counter: number
    maxValue: number
}

export default function Header({ counter, maxValue }: PropsType) {

    const style = `${s.main__header} ${counter === maxValue && s.red}`;

    return (
        <h1 className={style}>{counter}</h1>
    )
}

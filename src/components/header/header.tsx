import React from "react";
import s from './header.module.css';
import {Value} from "../../const";

type PropsType = {
    counter: number
}

export default function Header({ counter }: PropsType) {

    const style = `${s.main__header} ${counter === Value.MAX && s.red}`;

    return (
        <h1 className={style}>{counter}</h1>
    )
}

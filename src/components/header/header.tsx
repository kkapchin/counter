import React from "react";
import s from './header.module.css';
import {Counter} from "../../const";

type PropsType = {
    counter: number
}

export default function Header({ counter }: PropsType) {

    const style = `${s.main__header} ${counter === Counter.MAX && s.red}`;

    return (
        <h1 className={style}>{counter}</h1>
    )
}

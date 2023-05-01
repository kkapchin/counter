import React from "react";
import s from './header.module.css';
import {Notice} from "../../const";

type PropsType = {
    counter: number
    maxValue: number
    minValue: number
    notice: Notice
}

export default function Header(props: PropsType) {

    const {
        counter,
        maxValue,
        minValue,
        notice,
    } = props;

    const counterStyle = `${s.main__header} ${(counter >= maxValue || counter < minValue) && s.red}`;
    const noticeStyle = `${s.notice} ${notice === Notice.INCORRECT_VALUE && s.red}`;

    return (
        <>
            {notice === Notice.DEFAULT &&
                <h1 className={counterStyle}>{counter}</h1>}
            {notice !== Notice.DEFAULT &&
                <h5 className={noticeStyle}>{notice}</h5>}

        </>
    )
}

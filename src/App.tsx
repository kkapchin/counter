import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Default, InputId, Notice, StorageKey} from "./const";
import Counter from "./components/counter/counter";
import Settings from "./components/settings/settings";

function App() {

    const [counter, setCounter] = useState(Default.VALUE);
    const [min, setMin] = useState(Default.MIN_VALUE);
    const [max, setMax] = useState(Default.MAX_VALUE);
    const [step, setStep] = useState(Default.STEP);
    const [notice, setNotice] = useState<Notice>(Notice.DEFAULT);
    const [errorId, setErrorId] = useState<InputId>(InputId.NONE);

    useEffect(() => {
        const maxValue = localStorage.getItem(StorageKey.MAX_VALUE);
        const minValue = localStorage.getItem(StorageKey.MIN_VALUE);
        const counterStep = localStorage.getItem(StorageKey.COUNTER_STEP);
        if (maxValue) {
            setMax(JSON.parse(maxValue));
        }
        if (minValue) {
            setMin(JSON.parse(minValue));
            setCounter(JSON.parse(minValue));
        }
        if (counterStep) {
            setStep(JSON.parse(counterStep));
        }
    }, []);

    useEffect(() => {
        setErrorId(InputId.NONE);
        if ((max <= min) || (min < Default.VALUE)) {
            setNotice(Notice.INCORRECT_VALUE);
            setErrorId(InputId.MIN);
        }
    }, [min]);

    useEffect(() => {
        setErrorId(InputId.NONE);
        if (max <= min) {
            setNotice(Notice.INCORRECT_VALUE);
            setErrorId(InputId.MAX);
        }

    }, [max]);

    useEffect(() => {
        setErrorId(InputId.NONE);
        if ((step < Default.STEP)) {
            setNotice(Notice.INCORRECT_VALUE);
            setErrorId(InputId.STEP);
        }
    }, [step]);

    const increaseCounter = () => {
        if ((counter + step) > max) {
            setCounter(max);
            return;
        }
        counter < max &&
        setCounter(counter + step);
    }

    const decreaseCounter = () => {
        if ((counter - step) < min) {
            setCounter(min);
            return;
        }
        counter > min &&
        setCounter(counter - step);
    }

    const resetCounter = () => setCounter(min);

    const settingsChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNotice(Notice.PRESS_SET)
        if (e.currentTarget.id === InputId.MAX) {
            setMax(JSON.parse(e.currentTarget.value));
        }
        if (e.currentTarget.id === InputId.MIN) {
            setMin(JSON.parse(e.currentTarget.value));
        }
        if (e.currentTarget.id === InputId.STEP) {
            setStep(JSON.parse(e.currentTarget.value));
        }
    }

    const setSettings = () => {
        setErrorId(InputId.NONE);
        setNotice(Notice.DEFAULT);
        setCounter(min);
        localStorage.setItem(StorageKey.MAX_VALUE, JSON.stringify(max));
        localStorage.setItem(StorageKey.MIN_VALUE, JSON.stringify(min));
        localStorage.setItem(StorageKey.COUNTER_STEP, JSON.stringify(step));
    }

    return (
        <div className="App">
            <Settings
                minValue={min}
                maxValue={max}
                counterStep={step}
                onChange={settingsChangeHandler}
                errorId={errorId}
                setSettings={setSettings}
            />
            <Counter
                counter={counter}
                minValue={min}
                maxValue={max}
                notice={notice}
                increaseCounter={increaseCounter}
                decreaseCounter={decreaseCounter}
                resetCounter={resetCounter}
            />
        </div>
    );
}

export default App;

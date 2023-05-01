import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Value, COUNTER_STEP} from "./const";
import Counter from "./components/counter/counter";
import Settings from "./components/settings/settings";

function App() {

    const [counter, setCounter] = useState<number>(Value.DEFAULT);
    const [min, setMin] = useState<number>(Value.MIN);
    const [max, setMax] = useState<number>(Value.MAX);
    const [step, setStep] = useState<number>(COUNTER_STEP);

    useEffect(() => {
        const maxValue = localStorage.getItem('maxValue');
        const minValue = localStorage.getItem('minValue');
        const counterStep = localStorage.getItem('counterStep');
        if(maxValue) {
            setMax(JSON.parse(maxValue));
        }
        if(minValue) {
            setMin(JSON.parse(minValue));
            setCounter(JSON.parse(minValue));
        }
        if(counterStep) {
            setStep(JSON.parse(counterStep));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(max));
    }, [max]);

    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(min));
    }, [min]);

    useEffect(() => {
        localStorage.setItem('counterStep', JSON.stringify(step));
    }, [step]);

    const increaseCounter = () => {
        if((counter + step) > max) {
            setCounter(max);
            return;
        }
        counter < max &&
            setCounter(counter + step);
    }

    const decreaseCounter = () => {
        if((counter - step) < min) {
            setCounter(min);
            return;
        }
        counter > min &&
            setCounter(counter - step);
    }

    const resetCounter = () => setCounter(min);

    const settingsChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.id === 'max') {
            setMax(JSON.parse(e.currentTarget.value));
        }
        if(e.currentTarget.id === 'min') {
            setMin(JSON.parse(e.currentTarget.value));
        }
        if(e.currentTarget.id === 'step') {
            setStep(JSON.parse(e.currentTarget.value));
        }
    }

    return (
        <div className="App">
            <Settings
                minValue={min}
                maxValue={max}
                counterStep={step}
                onChange={settingsChangeHandler}
                setSettings={() => {}}
            />
            <Counter
                counter={counter}
                minValue={min}
                maxValue={max}
                increaseCounter={increaseCounter}
                decreaseCounter={decreaseCounter}
                resetCounter={resetCounter}
            />
        </div>
    );
}

export default App;

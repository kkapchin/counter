import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Value, COUNTER_STEP} from "./const";
import Counter from "./components/counter/counter";
import Settings from "./components/settings/settings";

function App() {

    const [counter, setCounter] = useState<number>(Value.DEFAULT);
    const [min, setMin] = useState<number>(Value.MIN);
    const [max, setMax] = useState<number>(Value.MAX);

    const increaseCounter = () => {
        counter < max &&
        setCounter(counter + COUNTER_STEP);
    }

    const decreaseCounter = () => {
        counter > min &&
        setCounter(counter - COUNTER_STEP);
    }

    const resetCounter = () => setCounter(Value.DEFAULT);

    const settingsChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.id === 'max') {
            setMax(JSON.parse(e.currentTarget.value));
            return;
        }
        setMin(JSON.parse(e.currentTarget.value));
    }

    return (
        <div className="App">
            <Settings
                minValue={min}
                maxValue={max}
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

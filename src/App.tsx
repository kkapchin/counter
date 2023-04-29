import React, {useState} from 'react';
import './App.css';
import {Value, COUNTER_STEP} from "./const";
import Counter from "./components/counter/counter";

function App() {

    const [counter, setCounter] = useState<number>(Value.DEFAULT);

    const increaseCounter = () => {
        counter < Value.MAX &&
        setCounter(counter + COUNTER_STEP);
    }

    const decreaseCounter = () => {
        counter > Value.DEFAULT &&
        setCounter(counter - COUNTER_STEP);
    }

    return (
        <div className="App">
            <Counter
                counter={counter}
                increaseCounter={increaseCounter}
                decreaseCounter={decreaseCounter}
            />
        </div>
    );
}

export default App;

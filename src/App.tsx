import React, {useState} from 'react';
import './App.css';
import Header from "./components/header/header";
import SuperButton from "./components/super-button/super-button";
import {Button, Counter, COUNTER_STEP} from "./const";

function App() {

  const [counter, setCounter] = useState<number>(Counter.DEFAULT);

  const increaseCounter = () => {
    counter < Counter.MAX &&
    setCounter(counter + COUNTER_STEP);
  }

  const decreaseCounter = () => {
    counter > Counter.DEFAULT &&
    setCounter(counter - COUNTER_STEP);
  }

  return (
      <div className="App">
        <Header counter={counter}/>
        <SuperButton
            title={Button.INCREASE}
            callback={increaseCounter}
            disabled={counter === Counter.MAX}
        />
        <SuperButton
            title={Button.DECREASE}
            callback={decreaseCounter}
            disabled={counter === Counter.DEFAULT}
        />
      </div>
  );
}

export default App;

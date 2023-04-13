import { useState } from "react";

const Counter = () => {
  const [counterState, setCounterState] = useState(() => {
    return {
      counter: 10,
      title: "Fun",
    };
  });

  const [titleState, setTitleState] = useState("Fun");

  function incrementCounter() {
    setCounterState((prevState) => {
      return { ...counterState, counter: prevState.counter + 1 };
    });
  }
  function decrementCounter() {
    setCounterState((prevState) => {
      return { ...counterState, counter: prevState.counter - 1 };
    });
  }

  return (
    <div className="col-12 col-md-4 offset-md-4 border text-white">
      <span className="h2 pt-4 m-2 text-white-50">{titleState} Counter</span>
      <br />
      <button onClick={incrementCounter} className="btn btn-success m-1">
        +1
      </button>
      <button onClick={decrementCounter} className="btn btn-danger m-1">
        -1
      </button>
      <br />
      <span className="h4">
        Counter: &nbsp;
        <span className="text-success">{counterState.counter}</span>
      </span>
    </div>
  );
};
export default Counter;

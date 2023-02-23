import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    console.log(event);
    setResult(result.concat(event.target.value)); //to change the displayed data and combine the previous result withe the new result
  };

  const clearDisplay = () => {
    setResult(""); //to clear the display
  };

  const calculate = () => {
    // eslint-disable-next-line no-eval
    setResult(eval(result), toString()); //eval is a function//
  };

  return (
    // body of the calculator

    <div className="container">
      <div className="calc">
        <input type="text" placeholder="0" id="answer" value={result} />{" "}
        {/* display portion */}
        <input
          type="button"
          value="9"
          className="button"
          onClick={clickHandler}
        />{" "}
        {/* buttons */}
        <input
          type="button"
          value="8"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="7"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="+"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="6"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="5"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="4"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="-"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="3"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="2"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="1"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="*"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="0"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="."
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="%"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="/"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="clear"
          className="button button1"
          onClick={clearDisplay}
        />
        <input
          type="button"
          value="="
          className="button button1"
          onClick={calculate}
        />
      </div>
    </div>
  );
};

export default App;

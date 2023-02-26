import React, { useState } from "react";
import "./App.css";

const App = () => {
    const [result, setResult] = useState("");

    const clickHandler = (event) => {
        console.log(event);
        setResult(result.concat(event.target.value)); //to change the displayed data and combine the previous result withe the new result
    };

    const clearDisplay = () => {
        setResult(""); //to clear display
    };

    const calculate = () => {
        try {
            setResult(eval(result));
            //eval is a function//
        } catch (err) {
            setResult("Error");
        }
    };
    // printind all buttons using an array
    const elements = [
        "9",
        "8",
        "7",
        "+",
        "6",
        "5",
        "4",
        "-",
        "3",
        "2",
        "1",
        "*",
        "0",
        ".",
        "%",
        "/",
    ];
    const list = [];
    for (let i = 0; i < 16; i++) {
        list.push(
            <input
                type="button"
                value={elements[i]}
                className="button"
                onClick={clickHandler}
            />
        );
    }

    // body of the calculator
    return (
        <div className="container">
            <div className="calc">
                <input type="text" placeholder="0" id="answer" value={result} />

                {list}

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

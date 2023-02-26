import "./App.css";
import { useState } from "react";

const App = () => {

// Display the result
const [result, setResult] = useState(0);

// Stores intermediate values
const [num, setNum] = useState(0);

// Checks the sign(+ - x /) when pressed
const [check, setCheck] = useState("#"); 

// fuctionalities of AC, Backspace and num keys
  const buttonPress = (value) => {
    if (value === "AC") {
      setResult(0);
    }
    else if (value === "back") {
      if (result < 0) {
        // bcs floor(-12/10)= -2
        setResult(Math.ceil(result / 10)); 
      }
      else  {
        setResult(Math.floor(result / 10));
      }
    } else {
      if (result < 0) 
        setResult(result * 10 - value);
      else 
        setResult(result * 10 + value);
    }
  };


  // Subtraction
  const onMinus = () => {
    setNum(result);
    setResult(0);
    setCheck("-");
  };

  // Addition
  const onAdd = () => {
    setNum(result);
    setResult(0);
    setCheck("+");
  };

  // Division
  const onDivide = () => {
    setNum(result);
    setResult(0);
    setCheck("/");
  };

  // Multiply
  const onMultiply = () => {
    setNum(result);
    setResult(0);
    setCheck("x");
  };

  // Functionality of the (result) button
  const onResult = () => {
    if ("+" === check) 
      setResult(num + result);
    else if ("-" === check) 
      setResult(num - result);
    else if ("x" === check) 
      setResult(num * result);
    else if ("/" === check) 
      setResult(num / result);
  };

  return (
    <div className="app">
      <div className="textarea">{result}</div>

      <div className="rowOperation">
        <div
          className="operation"
          onClick={() => {
            onAdd();
          }}
        >
          ➕
        </div>
        <div
          className="operation"
          onClick={() => {
            onMinus();
          }}
        >
          ➖
        </div>
        <div
          className="operation"
          onClick={() => {
            onMultiply();
          }}
        >
          ✖
        </div>
        <div
          className="operation"
          onClick={() => {
            onDivide();
          }}
        >
          ➗
        </div>
        <div
          className="operation"
          onClick={() => {
            onResult();
          }}
        >
          =
        </div>
      </div>

      <div className="row">
        {[...Array(9).keys()].map((item, index) => (
          <div
            className="button"
            key={index + Date.now()}
            onClick={() => {
              buttonPress(item + 1);
            }}
          >
            {item + 1}
          </div>
        ))}
      </div>

      <div className="row">
        <div
          className="button"
          onClick={() => {
            buttonPress(0);
          }}
        >
          0
        </div>
        <div
          className="button"
          onClick={() => {
            buttonPress("back");
          }}
        >
          ◀
        </div>
        <div
          className="button"
          onClick={() => {
            buttonPress("AC");
          }}
        >
          AC
        </div>
      </div>
    </div>
  );
};

export default App;

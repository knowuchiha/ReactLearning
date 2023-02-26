import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // Display
  const [result, setResult] = useState("");
  const [listDigits, setListDigits] = useState([]);
  const [listOperator, setListOperator] = useState([]);


  // Clicked button
  const handleClick = (event) => {
    setResult(result.concat(event.target.name)) 
  };

  // Clear screen
  const clear = () => {
    setResult("");
  };

  // Calculate result
  const calculate = () => {
    try {
      // evaluates the string
      // Todo : replace eval
      setResult(eval(result.toString())); 
    } catch (err) {
      //if user enters meaningless items
      setResult("Syntax Error");
    }
  };

  const oprr = ["+", "-", "*", "/"];

// On Mount
useEffect(() => {
    const operatorList = [];

      for (let i = 0; i < 4; i++) {
        operatorList.push(
          <button className="op" name={oprr[i]} onClick={(ev) => { setResult((prev) => prev.concat(ev.target.name)) }}>
            {oprr[i]}
          </button>
        );
      }

  
    const listDigits = [];
      for (let i = 1; i < 10; i++) {
        listDigits.push(
          <button className="di" name={[i]} onClick={(ev) => { setResult((prev) => prev.concat(ev.target.name)) }}>
            {[i]}
          </button>
        );
      }

      setListOperator([...operatorList]);
      setListDigits([...listDigits]);

  },[]);


  return (
    <div className="container">
      <div className="App">
        <form className="display">
          <input type="text" value={result} />
        </form>
        <div className="calculator">
          <div className="operators">
            <button className="op" onClick={clear} id="clear">
              C
            </button>
            {listOperator}
          </div>

          <div>
            {listDigits}
          </div>

          <button className="di" name="." onClick={() => handleClick}>
            .
          </button>
          <button className="di" name="0" onClick={() => handleClick}>
            0
          </button>
          <button className="di" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

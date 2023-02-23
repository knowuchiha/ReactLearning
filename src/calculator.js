import "./App.css";
import { useState } from "react";

function App() {
  //display
  const [result, setResult] = useState("");

  //clicked button
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  //clear screen
  const clear = () => {
    setResult("");
  };

  //calculate result
  const calculate = () => {
    try {
      setResult(eval(result).toString()); //evaluates the string
    } catch (err) {
      //if user enters meaningless items
      setResult("Error");
    }
  };

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
            <button className="op" name="+" onClick={handleClick}>
              +
            </button>
            <button className="op" name="-" onClick={handleClick}>
              -
            </button>
            <button className="op" name="*" onClick={handleClick}>
              *
            </button>
            <button className="op" name="/" onClick={handleClick}>
              /
            </button>
          </div>

          <button className="di" name="1" onClick={handleClick}>
            1
          </button>
          <button className="di" name="2" onClick={handleClick}>
            2
          </button>
          <button className="di" name="3" onClick={handleClick}>
            3
          </button>
          <button className="di" name="4" onClick={handleClick}>
            4
          </button>
          <button className="di" name="5" onClick={handleClick}>
            5
          </button>
          <button className="di" name="6" onClick={handleClick}>
            6
          </button>
          <button className="di" name="7" onClick={handleClick}>
            7
          </button>
          <button className="di" name="8" onClick={handleClick}>
            8
          </button>
          <button className="di" name="9" onClick={handleClick}>
            9
          </button>
          <button className="di" name="." onClick={handleClick}>
            .
          </button>
          <button className="di" name="0" onClick={handleClick}>
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

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
      setResult("Syntax Error");
    }
  };

  const oprr = ["+", "-", "*", "/"];
  const listop = [];
  for (let i = 0; i < 4; i++) {
    listop.push(
      <button className="op" name={oprr[i]} onClick={handleClick}>
        {oprr[i]}
      </button>
    );
  }

  const listdig = [];
  for (let i = 1; i < 10; i++) {
    listdig.push(
      <button className="di" name={[i]} onClick={handleClick}>
        {[i]}
      </button>
    );
  }

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

            {listop}
          </div>

          {listdig}

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

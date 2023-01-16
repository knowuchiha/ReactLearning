import './App.css';
import {useState} from "react";

function App() {
    // Counter
    const [number, setNumber] = useState(10);

    // Reduce Counter
    const onRemove = () => {
        setNumber(number - 1);
    }

    // Increase Counter
    const onAdd = () => {
        setNumber(number + 1);
    }

    return (
        <div className="App">
            <div className="plus" onClick={() => {
                onAdd();
            }}> +
            </div>
            <div className="value"> {number} </div>
            <div className="minus" onClick={() => {
                onRemove()
            }}> -
            </div>
        </div>
    );
}

export default App;

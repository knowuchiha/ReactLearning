import './App.css';
import {useState} from "react";

function App() {

    const [result, setResult] = useState(0);    //display the result
    const [num, setNum]= useState(0);           //stores intermediate values
    const [check, setCheck]= useState("#");     //checks the sign(+ - x /) when pressed

    //fuctionalities of AC, Backspace and num keys
    const buttonPress = (value) =>{
        if(value==="AC")
            setResult(0);
        else if(value==="back"){
            if(result<0) 
                setResult(Math.ceil(result/10)) // bcs floor(-12/10)= -2
            else
                setResult(Math.floor(result/10));
        }
        else
        {
            if(result<0)
                setResult(result*10-value);
            else
                setResult(result*10+ value);
        }
    }

    // document.addEventListener("keydown", event=>{
    //     if (Number.isInteger(event.key)){
            
    //         buttonPress(parseInt(event.key))
    //     }
    // })
    
    // Subtraction
    const onMinus = () => {
        setNum(result);
        setResult(0);
        setCheck("-");
    }

    // Addition
    const onAdd = () => {
        setNum(result);
        setResult(0);
        setCheck("+");
    }

    //division
    const onDivide = () => {
        setNum(result);
        setResult(0);
        setCheck("/");
    }

    //Multiply
    const onMultiply = () => {
        setNum(result);
        setResult(0);
        setCheck("x");
    }

    //functionality of the =(result) button
    const onResult = () =>{
        if("+"===check)
        {
            setResult(num+result);
        }
        else if("-"===check)
            setResult(num-result);
        else if("x"===check)
            setResult(num*result);
        else if("/"===check)
            setResult(num/result);
    }


    
    return (
        <div className="App">
            <div className="textarea">{result}</div>
          
            <div className="row">
                <div className="plus" onClick={() => {
                    onAdd();
                
                }}>➕
                </div>
                <div className="minus" onClick={() => {
                    onMinus();
                }}>➖
                </div>
                <div className="multiply" onClick={() => {
                    onMultiply();
                }}>✖
                </div>
                <div className="divide" onClick={() => {
                    onDivide();
                }}>➗
                </div>
                <div className="result" onClick={() => {
                    onResult();
                }}><strong>=</strong>
                </div>    
            </div>
            
            <div className="row">
                <div className="button1" onClick={()=>{
                    buttonPress(1);
                }}>1</div>
                <div className="button2" onClick={()=>{
                    buttonPress(2);
                }}>2</div>
                <div className="button3" onClick={()=>{
                    buttonPress(3);
                }}>3</div>
            </div>
            <div className="row">
                <div className="button4" onClick={()=>{
                    buttonPress(4);
                }}>4</div>
                <div className="button5" onClick={()=>{
                    buttonPress(5);
                }}>5</div>
                <div className="button6" onClick={()=>{
                    buttonPress(6);
                }}>6</div>
            </div>
            <div className="row">
                <div className="button7" onClick={()=>{
                    buttonPress(7);
                }}>7</div>
                <div className="button8" onClick={()=>{
                    buttonPress(8);
                }}>8</div>
                <div className="button9" onClick={()=>{
                    buttonPress(9);
                }}>9</div>
            </div>
            <div className="row">
                <div className="button0" onClick={()=>{
                    buttonPress(0);
                }}>0</div>
                <div className="buttonBack" onClick={()=>{
                    buttonPress("back");
                }}>◀</div>
                <div className="buttonAC" onClick={()=>{
                    buttonPress("AC");
                }}>AC</div>

                <div className="label">
                    Codded by:Arindom Aich 
                    <br/> 
                    <a href={"https://github.com/ArindomAich1"} target={"_blank"}><img src={"github.png"} style={{ width: '40px' }}></img></a>
                    <a href={"https://www.linkedin.com/in/arindomaich/"} target={"_blank"}><img src={"linkedin.png"} style={{ width: '40px' }}></img></a>
                </div>
            </div>
            
        </div>
    );
}

export default App;

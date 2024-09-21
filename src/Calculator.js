import React, { useState } from 'react';
import './Calculator.css'; 

const Calculator = () => { 
  const [number, setNumber] = useState(""); 
  const [numbers, setNumbers] = useState([]); 
  const [sign, setSign] = useState([]); 

  const handleNumberClick = (a) => { 
    setNumber(prevNumber => prevNumber + a); 
  }; 

  const handleSignClick = (si) => { 
    setNumbers(prevNumbers => [...prevNumbers, number]); 
    setSign(prevSign => [...prevSign, si]); 
    setNumber(""); 
  }; 

  const handleOperation = (b) => { 
    if (b === "P") { 
      handleSignClick("P"); 
    } else if (b === "S") { 
      handleSignClick("S"); 
    } else if (b === "D") { 
      handleSignClick("D"); 
    } else if (b === "M") { 
      handleSignClick("M"); 
    } else if (b === "E") { 
      // Add the current number to the array before calculating
      const updatedNumbers = [...numbers, number]; 

      let result = parseFloat(updatedNumbers[0]); // Start with the first number
    
      for (let n = 0; n < sign.length; n++) { 
        const currentSign = sign[n]; 
        const nextNumber = parseFloat(updatedNumbers[n + 1]); // Get the next number

        if (currentSign === "P") { 
          result += nextNumber; 
        } else if (currentSign === "S") { 
          result -= nextNumber; 
        } else if (currentSign === "D") { 
          result /= nextNumber; 
        } else if (currentSign === "M") { 
          result *= nextNumber; 
        } 
      }

      setNumber(result.toString()); 
      setNumbers([]); 
      setSign([]); 
    } 
  };

  const handleClear = () => { 
    setNumber(""); 
    setNumbers([]); 
    setSign([]); 
  }; 

  return ( 
    <div className="calculator"> 
      <input type="text" id="screen_input" value={number} readOnly /> 
      <div> 
        <button onClick={() => handleNumberClick("1")}>1</button> 
        <button onClick={() => handleNumberClick("2")}>2</button> 
        <button onClick={() => handleNumberClick("3")}>3</button> 
        <button className="operator" onClick={() => handleOperation("P")}>+</button> 
      </div> 
      <div> 
        <button onClick={() => handleNumberClick("4")}>4</button> 
        <button onClick={() => handleNumberClick("5")}>5</button> 
        <button onClick={() => handleNumberClick("6")}>6</button> 
        <button className="operator" onClick={() => handleOperation("S")}>-</button> 
      </div> 
      <div> 
        <button onClick={() => handleNumberClick("7")}>7</button> 
        <button onClick={() => handleNumberClick("8")}>8</button> 
        <button onClick={() => handleNumberClick("9")}>9</button> 
        <button className="operator" onClick={() => handleOperation("M")}>*</button> 
      </div> 
      <div> 
        <button onClick={() => handleNumberClick("0")}>0</button> 
        <button className="operator" onClick={() => handleOperation("D")}>/</button> 
        <button className="operator" onClick={() => handleOperation("E")}>=</button> 
        <button className="operator" onClick={handleClear}>C</button> 
      </div> 
    </div> 
  ); 
}; 

export default Calculator;

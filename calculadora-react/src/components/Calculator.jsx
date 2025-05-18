 
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
const [input, setInput] = useState('');

const handleClick = (value) => {
    setInput((prev) => prev + value);
};

const handleClear = () => {
    setInput('');
};

const handleEqual = () => {
    try {
    const result = eval(input);
    setInput(result.toString());
    } catch (error) {
    setInput('Error');
    }
};

return (
    <div className="calculator">
    <div className="display">{input || '0'}</div>
    <div className="buttons">
        <button onClick={handleClear} className="clear">AC</button>
        <div></div> {/* Espacio vacío para reemplazar el botón ± */}
        <div></div> {/* Espacio vacío para reemplazar el botón % */}
        <button onClick={() => handleClick('/')} className="operator">÷</button>

        <button onClick={() => handleClick('7')} className="number">7</button>
        <button onClick={() => handleClick('8')} className="number">8</button>
        <button onClick={() => handleClick('9')} className="number">9</button>
        <button onClick={() => handleClick('*')} className="operator">×</button>

        <button onClick={() => handleClick('4')} className="number">4</button>
        <button onClick={() => handleClick('5')} className="number">5</button>
        <button onClick={() => handleClick('6')} className="number">6</button>
        <button onClick={() => handleClick('-')} className="operator">−</button>

        <button onClick={() => handleClick('1')} className="number">1</button>
        <button onClick={() => handleClick('2')} className="number">2</button>
        <button onClick={() => handleClick('3')} className="number">3</button>
        <button onClick={() => handleClick('+')} className="operator">+</button>

        <button onClick={() => handleClick('0')} className="number zero">0</button>
        <button onClick={() => handleClick('.')} className="number">.</button>
        <button onClick={handleEqual} className="equal">=</button>
    </div>
    </div>
 );
};

export default Calculator;

import React, { useState } from 'react';
import '../styles/calculator.css';

const Calculator = () => {
    const [inputValue, setInputValue] = useState('');

    const clear = () => setInputValue('');
    const display = (value) => setInputValue(inputValue + value);
    const calculate = () => {
        try {
            const result = eval(inputValue);
            setInputValue(result.toString());
        } catch {
            setInputValue('Error');
        }
    };

    return (
        <form className="calculator" onSubmit={(e) => e.preventDefault()}>
            <input type="text" value={inputValue} readOnly />

            <div className="buttons">
                <span className="clear" onClick={clear}>C</span>
                <span onClick={() => display('/')}>/</span>
                <span onClick={() => display('*')}>*</span>
                <span onClick={() => display('-')}>-</span>

                <span onClick={() => display('7')}>7</span>
                <span onClick={() => display('8')}>8</span>
                <span onClick={() => display('9')}>9</span>
                <span onClick={() => display('+')}>+</span>

                <span onClick={() => display('4')}>4</span>
                <span onClick={() => display('5')}>5</span>
                <span onClick={() => display('6')}>6</span>
                <span className="empty"></span>

                <span onClick={() => display('1')}>1</span>
                <span onClick={() => display('2')}>2</span>
                <span onClick={() => display('3')}>3</span>
                <span className="equals" onClick={calculate}>=</span>

                <span onClick={() => display('0')}>0</span>
                <span onClick={() => display('00')}>00</span>
                <span onClick={() => display('.')}>.</span>
            </div>
        </form>
    );
};

export default Calculator;

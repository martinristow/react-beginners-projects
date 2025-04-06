import {useState} from 'react'
import {evaluate} from 'mathjs';
import '../style.css'

const Calculator = () => {
    const values = ['/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '0', '.'];

    const [inputValue, setInputValue] = useState('');

    const display = (value) => setInputValue(inputValue + value);
    const calculate = () => {
        try {
            setInputValue(evaluate(inputValue));
        } catch (error) {
            setInputValue('Error');
        }
    };

    const clear = () => setInputValue('');

    return (
        <form className='calculator' name='calc'>
            <input type="text" className="value" value={inputValue}/>

            <span className="num clear" onClick={() => clear()}>c</span>

            {
                values.map((value, index) => {
                    return value === '+' ? (
                        <span className='plus' key={index} onClick={() => display(value)}>{value}</span>) : (
                        <span key={index} onClick={() => display(value)}>{value}</span>)
                })
            }

            <span className='num equal' onClick={() => calculate()}>=</span>

        </form>
    )
}
export default Calculator

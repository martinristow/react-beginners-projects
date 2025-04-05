import {useState} from 'react'
import '../style.css'

const Calculator = () => {

    const [inputValue, setInputValue] = useState('');

    const clear = () => setInputValue('');

    return (
        <form className='calculator' name='calc'>
            <input type="text" className="value" value={inputValue}/>

            <span className="num clear" onClick={() => clear}>c</span>

            <span>/</span>
            <span>*</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>-</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>+</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>0</span>
            <span>.</span>
            <span>=</span>

        </form>
    )
}
export default Calculator

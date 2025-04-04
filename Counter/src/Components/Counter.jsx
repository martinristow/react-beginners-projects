import {useState} from "react";
import '../style.css';

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="counter">

            <div>
                <h1 className='number'>{count}</h1>
            </div>

            <div className="btns-container">
                <button onClick={increment} className="increment">+</button>
                <button onClick={decrement} className="increment">-</button>
                <button onClick={reset} className="increment">Reset</button>
            </div>

        </div>
    )
}
export default Counter;

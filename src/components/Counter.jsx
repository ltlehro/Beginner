import React, {useState} from 'react'
import '../styles/counter.css'

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Counter: {count}</h1>
            <div className={"buttons"}>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
        </div>
    )
}
export default Counter

import React from 'react'
import './Counter.css'

export default function Counter({ count, setCount }) {
    return (
        <div className="wrapper">
            <div className="counter">
                {count}
            </div>
            <div className="buttons">
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}

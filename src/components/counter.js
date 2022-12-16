import React from "react";

function Counter() {
    
    const [count, setCount] = React.useState(0)

    // Call back function - Increasing counter by 1
    function add() {
        setCount(prevCount => prevCount + 1)
    }

      // Call back function - Decreasing counter by 1
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>-</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
    
}

export default Counter;
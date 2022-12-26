import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + amount)}> increase: {amount}</button><br />
            <button onClick={() => setAmount(1)}> +1 </button>
            <button onClick={() => setAmount(5)}> +5 </button>
            <button onClick={() => setAmount(25)}> +25 </button>
            <button onClick={() => setAmount(100)}> +100 </button>
            <hr />
        </div>
    );
}

export default Counter; 
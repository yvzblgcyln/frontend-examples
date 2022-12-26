import { useState, useEffect } from "react"

function Counter3() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            console.log("interval");
            setCount((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

export default Counter3; 

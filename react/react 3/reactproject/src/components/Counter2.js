import { useState, useEffect } from "react"

function Counter2() {

    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);

    useEffect(() => { console.log("sayfa icindeki bir state degisti"); });
    useEffect(() => {
        console.log("component mount edildi");
    }, []); //[] ici bos cünkü ilk mount sirasinda bos olur
    useEffect(() => {
        console.log("count state degisti");
    }, [count]); //[count] degistikce fonksiyon calisir 
    useEffect(() => {
        console.log("count veya amount state degisti");
    }, [count, amount]); //[count] degistikce fonksiyon calisir 

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + amount)}> increase: {amount}</button><br />
            <button onClick={() => setAmount(1)}> +1 </button>
            <button onClick={() => setAmount(100)}> +100 </button>
            <hr />
        </div>
    );
}

export default Counter2; 
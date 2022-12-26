import React, { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);

    const [user, setUser] = useState({ name: "yavuz", surname: "ceylan" });

    return (
        <div>
            <h1> {count} </h1>
            <button onClick={() => setCount(count + amount)}>increase</button>

            <button onClick={() => setAmount(1)}>+1</button>
            <button onClick={() => setAmount(3)}>+3</button>
            <button onClick={() => setAmount(5)}>+5</button>

            <br />
            <br />

            <h2>{user.name} {user.surname} </h2>
            <button onClick={() => setUser({ ...user, name: "deneme1" })}>isim</button>
            <button onClick={(prev) => setUser({ ...prev, surname: "deneme2" })}>soyisim</button>

        </div>
    );
}

export default Counter;
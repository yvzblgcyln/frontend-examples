import { useState } from "react"

function Array() {

    const [colors, setColors] = useState(["red", "blue", "green"]);
    const [numbers, setNumbers] = useState([1, 2, 3]);

    const hadleClick = () => {
        setColors([...colors, "gray"])
    }

    return (
        <div>
            {numbers.map((number, i) => (
                <div key={i}> {number} </div>))
            }
            <button onClick={() => setNumbers([...numbers, Math.random()])}> add number </button>

            {colors.map((color, i) => (
                <div key={i}> {color} </div>))
            }
            <button onClick={hadleClick}> add gray </button><hr />

        </div>
    );
}

export default Array; 
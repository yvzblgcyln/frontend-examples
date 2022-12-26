import React, { useState } from "react"

function Colors() {
    const [color, setColor] = useState(["yesil", "mavi"]);

    const handleClick = () => {
        setColor((prev)=> [...prev, "mavi"])
        setColor([...color, Math.random()]);
    };

    return (
        <div>
            <h1>  renkler  </h1>
            {color.map((color, i) => (
                <div key={i}> {color}</div>))}

            <button onClick={handleClick}>ekle </button>

        </div>
    );
}

export default Colors;
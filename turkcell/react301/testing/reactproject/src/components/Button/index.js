import React, { useState } from "react";

function Button() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
      <button onClick={() => setCounter(counter - 1)}>decrease</button>
    </div>
  );
}

export default Button;

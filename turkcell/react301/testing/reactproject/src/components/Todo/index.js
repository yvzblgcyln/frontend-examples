import React, { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([
    { do: "do WH" },
    { do: "practice" },
    { do: "read book" },
  ]);

  const Click = () => {
    setTodo([...todo, { do: text }]);
    setText(" ");
  };
  return (
    <div>
      <input
        placeholder="what to do"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={Click}> add</button>
      {todo.map((todo, i) => (
        <div key={i}>{todo.do}</div>
      ))}
    </div>
  );
}

export default Todo;

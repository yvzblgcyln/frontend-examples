import { useState } from "react"

function User() {

    const [name, setName] = useState({ name: "yavuz" });
    const [user, setUser] = useState({ name: "yavuz", surname: "ceylan" });

    return (
        <div>
            <h2> {name.name} </h2>
            <button onClick={() => setName({ name: "x" })}> change name </button>

            <h2> {user.name} {user.surname} </h2>
            <button onClick={() => setUser({ ...user, name: "x" })}> change name </button>
            <button onClick={() => setUser({ ...user, surname: "x" })}> change surname </button>
            <hr />
        </div>
    );
}

export default User; 
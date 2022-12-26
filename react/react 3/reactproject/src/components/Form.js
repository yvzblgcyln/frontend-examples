import { useState } from "react"

function Form() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [gender, setGender] = useState("male")

    return (
        <div>
            <input
                placeholder="name"
                onChange={(event) => setName(event.target.value)}
            />
            <input
                placeholder="surname"
                onChange={(event) => setSurname(event.target.value)}
            />

            <select value={gender} onChange={(event) => setGender(event.target.value)}>
                <option value="male"> male</option>
                <option value="female"> female</option>
            </select>

            <p>name: {name} {surname}</p>
            <p>gender: {gender}</p><hr />
        </div>
    );
}

export default Form;   
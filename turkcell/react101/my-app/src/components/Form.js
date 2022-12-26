import React, { useState } from "react"

function Form() {
    const [user, setUser] = useState({ name: "yavuz", surname: "ceylan" });
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [gender, setGender] = useState("0");

    return (
        <div>
            <div>isim </div>
            <input
                placeholder="isim"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="soyisim"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
            />
            <input
                placeholder="name"
                name="name"
                value={user.name}
                onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
            />
            <input
                placeholder="surname"
                name="surname"
                value={user.surname}
                onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
            />
            <div>
                <div>cinsiyet</div>
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="0">erkek</option>
                    <option value="1">kadin</option>
                </select>
            </div>
            <div>
                <strong>
                    {name} {surname} {user.name} {user.surname}
                </strong>
            </div>
            <div>
                <strong>
                    {gender === "0" ? "erkek" : "kadin"}
                </strong>
            </div>





        </div>
    );
}

export default Form;
import { useState } from "react"

function Form2() {
    const [form, setForm] = useState({ name: "", surname: "", gender: "male" });

    const handleChange = (e) => {
        setForm({ ...form, [e.taget.name]: e.target.value });
    };

    return (
        <div>
            <input
                placeholder="name"
                name="name"
                value={form.name}
                onChange={handleChange}
            />
            <input
                placeholder="surname"
                name="surname"
                value={form.surname}
                onChange={handleChange}
            /><br />

            <select value={form.gender} onChange={handleChange}>
                <option value="male"> male</option>
                <option value="female"> female</option>
            </select>

            <p>{form.name} {form.surname}</p>
            <p>{form.gender}</p>

        </div>
    );
}

export default Form2;
import React from "react"

function User(props) {
    console.log(props);

    return (
        <div>
            <div>isim: {props.name}</div>
            <div>city: {props.city}</div>
            <div>age: {props.age}</div>
            <hr />
        </div>
    );
}

export default User;
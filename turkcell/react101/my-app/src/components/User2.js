import React from "react"

function User2({ data, friends }) {

    return (
        <div>
            <hr />
            <div>isim: {data.name} </div>
            <div>city: {data.city} </div>
            <div>age:  {data.age} </div>

            {friends.map((friend, i) => (
                <div key={i}>{friend}</div>
            ))}

            <hr />
        </div>
    );
}

export default User2;
import React from "react"
import PropTypes from "prop-types";

function User4({ title, data, friends }) {

    return (
        <div>
            <hr />
            <strong>{title}</strong>
            <div>isim: {data.name} </div>
            <div>sehir: {data.city} </div>
            <div>yas:  {data.age} </div>

            {friends.map((friend, i) => (
                <div key={i}>{friend}</div>
            ))}
            <hr />
        </div>
    );
}

User4.propTypes = {
    title: PropTypes.string,
    data: PropTypes.exact({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        city: PropTypes.string,
    }), friends: PropTypes.array
};

User4.defaultProps = {
    title: "kisi"
}

export default User4;
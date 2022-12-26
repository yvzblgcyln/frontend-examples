import React from "react"
import PropTypes from "prop-types";

function User3({ name, age, city }) {

    return (
        <div>
            <hr />
            Kisi
            <div>isim: {name} </div>
            <div>sehir: {city} </div>
            <div>yas:  {age} </div>
            <hr />
        </div>
    );
}

User3.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    city: PropTypes.string,
};

export default User3;
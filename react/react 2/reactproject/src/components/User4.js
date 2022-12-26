import PropTypes from "prop-types"

function User4({ name, age, city }) {

    return (
        <div >
            <p>name:{name}</p>  
            <p>age:{age}</p>
            <p>city:{city}</p>
        </div>
    );
}

User4.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    city: PropTypes.string
}

export default User4;
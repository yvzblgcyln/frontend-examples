import PropTypes from "prop-types"

function User5({ title1, title2, data5, array }) {

    return (
        <div >
            <p><strong>{title1}</strong></p>
            <p><strong>{title2}</strong></p>
            <p>name:{data5.name}</p>
            <p>age:{data5.age}</p>
            <p>city:{data5.city}</p>
        </div>
    );
}

User5.propTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string,
    data5: PropTypes.exact({
        name: PropTypes.string,
        age: PropTypes.number,
        city: PropTypes.string
    }),
    array: PropTypes.array,
};

User5.defaultProps = {
    title1: "default title",
    title2: "default title",
};

export default User5;
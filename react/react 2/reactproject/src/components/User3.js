function User3({ data3, fulname }) {

    return (
        <div >
            <p>name: {data3.name}</p>
            <p>age: {data3.age}</p>

            {fulname.map((fulname,i) => (
                <div key={i}> {i + 1} {fulname}</div>
            ))}
        </div>
    );
}

export default User3;
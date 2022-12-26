import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`} state={user}>
              {" "}
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

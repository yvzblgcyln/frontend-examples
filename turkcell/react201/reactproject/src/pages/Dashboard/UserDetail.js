import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [user, setUser] = useState(location.state);

  useEffect(() => {
    if (!user?.id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [id, user]);

  return (
    <div>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      {/*location.state && <pre>{JSON.stringify(location.state, null, 2)}</pre>*/}
      <a href={`/users/${Number(id) + 1}`}> next user</a>
    </div>
  );
}

export default UserDetail;

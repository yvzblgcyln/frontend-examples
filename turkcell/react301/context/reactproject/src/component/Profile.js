import { useState } from "react";
import { UseUser } from "../context/UserContext";

function Profile() {
  const { user, setUser } = UseUser();
  const [loading, SetLoading] = useState("false");

  const hadleLogin = () => {
    SetLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: "yavuz", bio: "YBC" });
      SetLoading(false);
    }, 1500);
  };
  const hadleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {loading /*açılışta false gelmesine rağmen düzgün çalışmıyor */}
      {!user && (
        <button onClick={hadleLogin}>{loading ? "Loading..." : "Login"}</button>
      )}

      <br />
      <code>{JSON.stringify(user)}</code>
      <br />

      {user && <button onClick={hadleLogout}>Logout</button>}
    </div>
  );
}

export default Profile;

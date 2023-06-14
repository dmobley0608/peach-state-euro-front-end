import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../api/AuthContext";

export default function LoginPage({message}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const authContext = useAuth();
  const nav = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);   
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async () => {
    if (await authContext.login(username, password)) {
      nav("/admin/items")
    } else {
      console.log("Error logging in");
    }
  };

  return (
    <div className="container col-lg-6 position-absolute top-50 start-50 translate-middle border border-1 shadow rounded p-5">
        <h4>{message}</h4>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="username"
          type="text"
          name="username"
          onChange={handleUsername}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Password"
          type="password"
          name="password"
          onChange={handlePassword}
        />
      </div>
      <div className="col-lg-6">
        <button className="btn btn-success me-auto w-100" type="button" onClick={onSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}

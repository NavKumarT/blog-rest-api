import logo from "./logo.svg";
import "./App.css";
import { Fragment, useState } from "react";
import Login from "./Login";

function App() {
  const [username, setUsername] = useState("testuser9");
  const [password, setPassword] = useState("testpass13");
  const [email, setEmail] = useState("test@test.com");
  const [token, setToken] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitHandler = () => {
    fetch("http://localhost:8000/api/v1/dj-rest-auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => setToken(data.key))
      .catch((error) => console.error(error));
  };

  const retryHandler = () => {
    fetch("http://localhost:8000/api/v1/?Authorization=`${token}`")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <Fragment>
      {!token && (
        <form onSubmit={submitHandler}>
          <div className="">
            <span>Enter Username: </span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={usernameHandler}
            />
          </div>
          <div className="">
            <span>Enter Email: </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={emailHandler}
            />
          </div>
          <div>
            <span>Enter Password: </span>
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={passwordHandler}
            />
          </div>
          <button type="button" onClick={submitHandler}>
            SUBMIT
          </button>
        </form>
      )}
      <h1>Logged in with token {token}</h1>
      <button onClick={retryHandler}>Try to get data !</button>
    </Fragment>
  );
}

export default App;

import React, { useState } from "react";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState("")

  const register = (e) => {};
  const loginToApp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
        alt=""
      />
      <form>
        <input
         value = {name}
         onChange = {(e) =>setName(e.target.value)}
         placeholder="Full name"
         type="text" />

        <input
          value={email}
          onChange={setEmail((e) => e.target.value)}
          type="email"
          placeholder="Email"
        />

        <input
          value = { password }
          onChange={setPassword((e) => e.target.value)}
          type="password"
          placeholder="Password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>

        <p>
          Not a member?
          <span className="login_register" onClick={register}>
            Register Now
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;

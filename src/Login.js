import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import "./Login.css";
import { auth } from './firebase';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState("")
  const [profilePic,setProfile] = useState("")
  const dispatch = useDispatch();

  const register = () => {
    if(!name){
        alert("please insert your Full name")
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth) => {
        userAuth.user.updateProfile({
            displayName:name,
            photoURL:profilePic,
        })
        .then(()=> {
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:name,
                photoURL:profilePic
                
            }))
        })
  }).catch((error) =>{
    alert(error.message)
  })
  }


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
         placeholder="Full name (required if registering"
         type="text" />
        
        <input 
        value = {profilePic}
        onChange = {(e) =>setProfile(e.target.value)}
        placeholder = "Profile pic URL (optional)"
        type = "text" 
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />

        <input
          value = { password }
          onChange={(e) => setPassword(e.target.value)}
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

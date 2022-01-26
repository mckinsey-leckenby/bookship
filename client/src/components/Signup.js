import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";

function Signup({ onLogin }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(); 

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("https://salty-fortress-94451.herokuapp.com/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false)
      if (r.ok) {
        r.json().then((user) => onLogin(user)).then(navigate("/books"))
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          autoComplete="off"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          autoComplete="off"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <ButtonGroup variant='contained' color='secondary'>
        <Button variant="fill" color="primary" type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button></ButtonGroup>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}

      </form>
    </div>
  );
}

export default Signup;

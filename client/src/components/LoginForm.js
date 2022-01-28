import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';


function LoginForm({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


  
const navigate = useNavigate(); 

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("https://bookship.herokuapp.com/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((r) => {
            setIsLoading(false);
            if(r.ok) {
                r.json().then((user) => onLogin(user)).then(navigate("/books"))
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} >
                <h3>LogIn</h3>
                <input 
                    type="text"
                    id="email"
                    autoComplete=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email here"
                    className="input-text"
                />
                <br />
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password here"
                    className="input-text"
                />
                <br />
                <ButtonGroup variant='contained' color='secondary'>
                  <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
       </ButtonGroup>
   
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      
            </form>
        </div>
    )
}

export default LoginForm;
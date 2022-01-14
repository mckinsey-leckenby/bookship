import React, { useState } from "react";

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((r) => {
            setIsLoading(false);
            if(r.ok) {
                r.json().then((user) => onLogin(user))
            } else {
                r.json().then((err) => setError(err.error));
            }
        })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} >
                <h3>LogIn</h3>
                <input 
                    type="text"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email here"
                    className="input-text"
                />
                <br />
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password here"
                    className="input-text"
                />
                <br />
            
                  <button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
        <>
        {/* {error.map((err) => (
          < key={err}>{err}</>
        ))} */}
        </>
            </form>
        </div>
    )
}

export default LoginForm;
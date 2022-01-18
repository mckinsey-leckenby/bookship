import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import { Link } from "react-router-dom"

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true)

   
      return (
        <div>
          <h2>Book Club</h2>
          {showLogin ? (
            <>
            <LoginForm onLogin={onLogin} />
            <p>
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
            </p>
            </>
          ) : (
            <>
            <Signup onLogin={onLogin} />
            <p>
              Already have an account? 
              <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
            </p>
            </>
          )}
          </div>
      )
          }
          
    

export default Login;




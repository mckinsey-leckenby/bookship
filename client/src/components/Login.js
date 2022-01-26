import React, { useState } from "react";
import { ButtonGroup } from "@mui/material";
import Button from '@mui/material/Button';
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import bookshiplogo from './bookship-logo.png';



function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true)

// function Buttons() {
//   return(
//     <Button onClick={() => setShowLogin(false)}>
//     Sign Up
//   </Button>
//   )
// }
   
      return (
        <div>
           <div id="book-header">

<img
  src={bookshiplogo}
   alt="book header" 

/>


</div>
          {showLogin ? (
            <>
            <LoginForm onLogin={onLogin} />
            <p>
            Don't have an account? &nbsp;
            {/* {Buttons} */}
            <ButtonGroup variant='contained' color='secondary'>
            <Button variant="fill" color="primary" type="submit" style={{margin: "0 auto"}} onClick={() => setShowLogin(false)}>
              Sign Up
            </Button></ButtonGroup>
            {/* <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button> */}
            </p>
            </>
          ) : (
            <>
            <Signup onLogin={onLogin} />
            <p>
              Already have an account? 
              <ButtonGroup variant='contained' color='secondary'>
              <Button variant="fill" color="primary" type="submit" sx={{display: "flex"}}
               onClick={() => setShowLogin(true)}>
              Log In
            </Button>
           </ButtonGroup>
            </p>
            </>
          )}
          </div>
      )
          }
          
    

export default Login;




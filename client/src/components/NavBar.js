import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
function NavBar({ setUser }) {
const navigate = useNavigate();

    function handleLogoutClick() {
        fetch("http://localhost:4000/api/logout", {method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null);
                navigate("/books")
            }
        });
    }
  

    return(
       
     
      <div className="container">
    
          
           
           <ButtonGroup variant='contained' >
          <Button variant="fill" color="primary" type="submit" onClick={handleLogoutClick}>Logout</Button></ButtonGroup>
          
          <Link style={{textDecoration:"none", color: "black"}} to="/books">
          <ButtonGroup variant='contained'><Button variant="fill" color="primary" type="submit"  >Home</Button></ButtonGroup>
           </Link>
      
        
      </div>
    

    )
}

export default NavBar;



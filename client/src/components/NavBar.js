import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ setUser }) {
const navigate = useNavigate();

    function handleLogoutClick() {
        fetch("http://localhost:4000/api/logout", {method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null);
                navigate("/")
            }
        });
    }
  

    return(
        <header>
     
      <div>
    
          <>
           <div>
          <button onClick={handleLogoutClick}>Logout</button>
          
          <Link to="/books"><button>Home</button></Link>
         
          </div>
      
          </>
         {/* )}  */}
      </div>
    </header>

    )
}

export default NavBar;



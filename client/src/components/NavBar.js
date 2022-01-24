import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ setUser }) {
const navigate = useNavigate();

    function handleLogoutClick() {
        fetch("https://salty-fortress-94451.herokuapp.com/api/logout", {method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null);
                navigate("/books")
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



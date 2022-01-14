import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {

    function handleLogoutClick() {
        fetch("api/logout", {method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return(
        <header>
     
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
             <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>

    )
}

export default NavBar;



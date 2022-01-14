import React, { useState, useEffect } from "react";

import Home from "./components/Home"
import Login from "./components/Login";

import NavBar from "./components/NavBar";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
function App () {
  const [user, setUser] = useState(null)


  useEffect(() => {
    // auto-login
    fetch("api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
        <NavBar user={user} setUser={setUser} />
        <main>
            {user ? (
             <Routes>
                    <Route path="/" element={<Home user={user}/>}>
                       
                    </Route>
                
                    </Routes>
            ) : (
              <Routes>
                    {/* <Route path="/signup" element={<Signup setUser={setUser} />}>
            
            </Route> */}
            <Route path="/login" element={<Login setUser={setUser} />}>
              
            </Route>
            <Route path="/" element={ <Home />}>
             
            </Route>
                </Routes>

            )}

        </main>
    </>
  
  );
}

export default App;
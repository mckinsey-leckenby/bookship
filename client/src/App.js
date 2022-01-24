import React, { useState, useEffect } from "react";

import Login from "./components/Login";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import BookForm from "./components/BookForm";
import BookDetail from "./components/BookDetail";


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import BookContainer from "./components/BookContainer";

function App() {
  const [user, setUser] = useState(null)
  


  useEffect(() => {
    // auto-login
    fetch("http://localhost:4000/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
        console.log(user)
      }
    })
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Header />
      <main>
        <Routes>
          {/* <Route exact path="/" element={<BookContainer user={user} />}>

          </Route> */}

          <Route path="/books" element={<BookContainer  user={user}/>}>
          </Route>
          <Route path="/books/:id" element={<BookDetail  user={user}/>}>

          </Route>
          <Route path="/login" element={<Login user={user} />}>

          </Route>
       
          <Route path="/new" element={<BookForm user={user}/>}>

          </Route>
        </Routes>


      </main>
    </>

  );
}

export default App;
import React, { useEffect, useState } from "react";

import Header from "./Header";
import BookForm from "./BookForm";
import BookContainer from "./BookContainer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home({ user, setUser }) {
  const [showForm, setShowForm] = useState(false);
  const [books, setBooks] = useState([]);


  useEffect(() => {
    fetch("api/books")
      .then((r) => r.json())
      .then(setBooks);
  }, []);




  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddBook(newBook) {
    setBooks([...books, newBook]);
  }

  function handleDeleteBook(bookToDelete) {
    const updatedBooks = books.filter((book) => book.id !== bookToDelete.id);
    setBooks(updatedBooks);
  }

  function handleUpdateBook(updatedBook) {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
  }

  return (
    <>
      <Header user={user} setUser={setUser}/>
      <main>
      {/* <button onClick={handleClick}>Add a Book</button> */}
        <Routes>

          <Route path="/books" element={<BookContainer books={books}  user={user} />}>
          </Route>
   
       
      

          <Route path="/new" element={<BookForm onAddBook={handleAddBook} user={user} />}>
       
          </Route>
        </Routes>
        
        </main>

      {showForm ? <BookForm onAddBook={handleAddBook} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Book</button>
      </div>
      <BookContainer
        books={books}
        onDeleteBook={handleDeleteBook}
        onUpdateBook={handleUpdateBook}
      />
    </>
  )
}

export default Home;
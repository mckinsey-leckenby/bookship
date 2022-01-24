import React, { useState, useEffect} from "react";
import BookCard from "./BookCard";
import BookForm from "./BookForm";
import { Link } from "react-router-dom"

function BookContainer() {
    const [showForm, setShowForm] = useState(false);
    const [books, setBooks] = useState([]);


    useEffect(() => {
      fetch("https://salty-fortress-94451.herokuapp.com/api/books/")
        .then((r) => r.json())
        .then(setBooks);
    }, []);
    
    const bookCards = books.map((book) => (
        <BookCard
                 key={book.id}
                 book={book}
                 onDeleteBook={handleDeleteBook}
                 onUpdateBook={handleUpdateBook}
           
             />
         ))
     
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
        <div>
        {showForm ? <BookForm onAddBook={handleAddBook} /> : null}
        <div className="buttonContainer">
         <button onClick={handleClick}>Add a Book</button>
          </div>
          
        <div id="book-collection">
            {bookCards}
  
        </div>
        </div>
    )
}

export default BookContainer
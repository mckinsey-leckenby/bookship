import React from "react";
// import DisplayBookComment from "./DisplayBookComment";

function BookCard({ book, onDeleteBook, onUpdateBook }) {
    const { id, img_url, title, author, description, pages, genre, likes  } = book

    function handleDeleteClick() {
        fetch(`api/books/${id}`, {
            method: "DELETE", 
        }).then((r) => {
            if (r.ok) {
                onDeleteBook(book)
            }
        })
    }

  function handleLikeClick() {
    const updateBookStatus = {
      likes: book.likes + 1,
    };
    fetch(`api/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateBookStatus),
      })
        .then((r) => r.json())
        .then((updatedBook) => onUpdateBook(updatedBook));
    }
  
    return (
        <div className="card">
          
            <h2>{title}</h2>
            <img      src={img_url} alt={title} className="book-avatar" />
            
            <p>{likes} Currently Reading </p>
            <button className="like-btn" onClick={handleLikeClick}>
        Reading
      </button>
            <button className="del-btn" onClick={handleDeleteClick}>
        Remove from Reading List 
      </button>
      
        </div>
    )
}

export default BookCard
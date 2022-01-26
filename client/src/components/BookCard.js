import React from "react";
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { Link } from "react-router-dom"
function BookCard({ book, onDeleteBook, onUpdateBook }) {
    const { id, img_url, title, likes  } = book

    function handleDeleteClick() {
        fetch(`http://localhost:4000/api/books/${id}`, {
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


    fetch(`http://localhost:4000/api/books/${id}`, {
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
        <div >
          
           <Link to={`/books/${book.id}`}>
              <img  src={img_url} alt={title}  style={{width: "270px", display: "flex"}}  />  
                </Link>
            <p>{likes} currently reading
            <ButtonGroup variant='contained' color='secondary'>
            <Button variant="fill" color="primary" type="submit"  onClick={handleLikeClick}>
        Reading
      </Button> </ButtonGroup></p>
      <ButtonGroup variant='contained' color='secondary'>
            <Button variant="fill" color="primary" type="submit" className="del-btn" onClick={handleDeleteClick}>
        Remove from Reading List 
      </Button></ButtonGroup>
   
        </div>
    )
}

export default BookCard



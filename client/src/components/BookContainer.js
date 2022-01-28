import React, { useState, useEffect} from "react";
import BookCard from "./BookCard";
import BookForm from "./BookForm";
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function BookContainer() {
    const [showForm, setShowForm] = useState(false);
    const [books, setBooks] = useState([]);


    useEffect(() => {
      fetch("https://bookship.herokuapp.com/api/books/")
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
        <div>
          {showForm ? <BookForm onAddBook={handleAddBook} /> : null}
          <ButtonGroup variant='contained' color='secondary' style={{textAlign: "center"}}>
         <Button style={{textAlign: "center"}} variant="fill" color="primary" type="submit" onClick={handleClick}>Add a Book</Button></ButtonGroup>
      
          <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
              {books.map((book) => (
        
          <Grid item  key={book} xs={12} sm={6} md={4}>
            <Card
                  sx={{ height: '100%', display: 'flex' }}
                >
                  <BookCard
                 key={book.id}
                 book={book}
                 onDeleteBook={handleDeleteBook}
                 onUpdateBook={handleUpdateBook}
           
             />
                  <CardContent sx={{ flexGrow: 1 }}></CardContent>
                  </Card>
        </Grid>
            ))}
        </Grid>
          
     
        </Container>
        
        
          
        
    
        </div>
    )
}

export default BookContainer
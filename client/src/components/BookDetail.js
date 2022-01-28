import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import CommentForm from "./CommentForm";
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";
import { Grid } from "@mui/material";



function BookDetail({ user }) {
    const { id } = useParams()
    const [showBook, setShowBook] = useState([]);




    useEffect(() => {
        fetch(`https://bookship.herokuapp.com/api/books/${id}`)
            .then((r) => r.json())
            .then(data => {
                setShowBook(() => data)
            })
    }, []);


    function handleDeleteClick(commentId) {
        fetch(`https://bookship.herokuapp.com/api/comments/${commentId}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                console.log(showBook)
                const newBook = { ...showBook, comments: showBook.comments.filter((comment) => comment.id !== commentId) }
                setShowBook(newBook)
            }
        })
    }



    function handleAddComment(newComment) {
        setShowBook({
            ...showBook,
            comments: [...showBook.comments, newComment]
        })
    }
    
      
        
         


    return (
        <div>
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            {showBook ?
                <div>
                     
                    {/* <p>{JSON.stringify(showBook)}</p>  */}
                    
                    
                    &nbsp; &nbsp; &nbsp; <img src={showBook.img_url} alt={showBook.title} />
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                    &nbsp; &nbsp; &nbsp;<h2 > &nbsp; &nbsp;DETAILS:</h2>
                 <ul>
                        <li>AUTHOR: {showBook.author}</li>
                        &nbsp;
                        <li>DESCRIPTION: {showBook.description}</li>
                        &nbsp;
                        <li>PAGE COUNT: {showBook.pages}</li>
                        &nbsp;
                        <li>GENRE: {showBook.genre}</li>
                    </ul>
                   </Grid>
                    </Grid>
                    
{/*                    
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}> */}
                    
                     <h2>&nbsp; COMMENTS:</h2>

                      {showBook.comments?.map((comment) =>
                        <div key={comment.id} >
                            
                            &nbsp;  &nbsp; &nbsp; Comment By: {comment.user?.first_name}
                                <br/>
                                &nbsp; &nbsp; &nbsp;   Comment: {comment.comment} &nbsp;
                                {/* <br/> */}
                                <ButtonGroup  margin= 'auto' variant='contained' color='secondary'>
                                <Button variant="fill" color="primary" type="submit" onClick={() => handleDeleteClick(comment.id)}>delete</Button></ButtonGroup>
                        </div>
                        
                    )}
                  
                    
                    &nbsp; &nbsp; &nbsp; <CommentForm onAddComment={handleAddComment} user={user} />
                </div>
                : null}


        </div>


    )
}

export default BookDetail

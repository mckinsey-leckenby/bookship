import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import CommentForm from "./CommentForm";


function BookDetail({ user }) {
    const { id } = useParams()
    const [showBook, setShowBook] = useState([]);
    const [comments, setComments] = useState([]);
   
   
   

    useEffect(() => {
        fetch(`http://localhost:4000/api/books/${id}`)
            .then((r) => r.json())
            .then(data => {
                setShowBook(() => data)
                setComments(() => data.comments)
               
            })
    }, []);



    // function handleAddComment(newComment) {
    //     setShowBook((originalBook) => [originalBook, newComment]);
    //   }
    
    function handleAddComment(newComment){
        setShowBook({
            ...showBook,
            comments: [...showBook.comments, newComment]
        })
    }
    return (
        <div>
            {/* <h2>HELLO {id} </h2> */}

            {showBook ?
                <div>
                    {/* <p>{JSON.stringify(showBook)}</p>  */}
                    <img src={showBook.img_url} alt={showBook.title} />
                    <ul>
                        <li>Author: {showBook.author}</li>
                        <li>Description: {showBook.description}</li>
                        <li>Page Count: {showBook.pages}</li>
                        <li>Genre: {showBook.genre}</li>
                        <ul>Comments: {comments?.map((comment) =>
                            <li key={comment.id}>
                                {comment.comment}</li>
                        )}
                        </ul>
                        <li> 
                           <CommentForm onAddComment={handleAddComment} user={user} />
                          
                        </li>
                        
                    </ul>


                </div>
                : null}


        </div>


    )
}

export default BookDetail

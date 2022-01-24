import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import CommentForm from "./CommentForm";


function BookDetail({ user }) {
    const { id } = useParams()
    const [showBook, setShowBook] = useState([]);




    useEffect(() => {
        fetch(`https://salty-fortress-94451.herokuapp.com/api/books/${id}`)
            .then((r) => r.json())
            .then(data => {
                setShowBook(() => data)
            })
    }, []);


    function handleDeleteClick(commentId) {
        fetch(`https://salty-fortress-94451.herokuapp.com/api/comments/${commentId}`, {
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

            {showBook ?
                <div>
                    {/* <p>{JSON.stringify(showBook)}</p>  */}

                    <img src={showBook.img_url} alt={showBook.title} />
                    <h2>Details:</h2>
                    <ul>
                        <li>Author: {showBook.author}</li>
                        <li>Description: {showBook.description}</li>
                        <li>Page Count: {showBook.pages}</li>
                        <li>Genre: {showBook.genre}</li>
                    </ul>

                    <h2>Comments:</h2>

                    {showBook.comments?.map((comment) =>
                        <div key={comment.id} style={{border:"1px solid black"}}>
                            
                                Comment By: {comment.user?.first_name}
                                <br/>
                                Comment: {comment.comment} &nbsp;
                                {/* <br/> */}
                                <button onClick={() => handleDeleteClick(comment.id)}>delete</button>
                        </div>
                    )}
                        <CommentForm onAddComment={handleAddComment} user={user} />
                </div>
                : null}


        </div>


    )
}

export default BookDetail

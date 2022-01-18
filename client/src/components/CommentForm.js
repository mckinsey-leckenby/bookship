import React, { useState } from "react";
import { useParams } from "react-router-dom"

function CommentForm({ onAddComment, user }) {
    const { id } = useParams()
    
    const [commentFormData, setCommentFormData] = useState({
        comment: "",
        user_id: user.id,
        book_id: id
    })
    function handleChange(e) {
        setCommentFormData({
            ...commentFormData, 
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newComment = {
            ...commentFormData}

        fetch(`http://localhost:4000/api/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment),
        })
            .then((r) => r.json())
            .then((newComment) => {
                setCommentFormData({
                    id: "",
                    comments: "",
                })
                onAddComment(newComment)
                
            })
    }

    return (

        <div className="container">
            <form onSubmit={handleSubmit} className="add-book-form">
                <h3>Add New Comment</h3>
                <input 
                    type="text"
                    name="comment"
                    onChange={handleChange}
                    value={commentFormData.comment}
                    placeholder="Add Comment here..."
                    className="input-text"
                />
                    <input 
                    type="submit"
                    name="submit"
                    value="Add New Comment"
                    className="submit"
                />
                   </form>
        </div>
    )
}

export default CommentForm


  
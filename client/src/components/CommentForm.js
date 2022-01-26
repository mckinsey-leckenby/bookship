import React, { useState } from "react";
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";

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

        fetch(`https://salty-fortress-94451.herokuapp.com /api/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment),
        })
            .then((r) => r.json())
            .then((responseComment) => {
                console.log(responseComment)
                setCommentFormData({
                    comment: "",
                    user_id: user.id,
                    book_id: id
                })
                onAddComment(responseComment)
                
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
                    <ButtonGroup variant='contained' color='secondary'> <Button
                    variant="fill" color="primary" type="submit"
                    type="submit"
                    name="submit"
                    value="Add New Comment"
                    className="submit" >comment</Button></ButtonGroup>
            
                   </form>
        </div>
    )
}

export default CommentForm


  
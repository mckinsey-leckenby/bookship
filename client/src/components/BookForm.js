import React, { useState } from "react";
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";

function BookForm( { onAddBook }) {
    const [formData, setFormData] = useState({
        img_url: "",
        title: "",
    })

    function handleChange(e) {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newBook = {
            ...formData }

        fetch("https://bookship.herokuapp.com/api/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
        })
            .then((r) => r.json())
            .then((newBook) => {
                setFormData({
                    img_url: "",
                    title: "",
                })
                onAddBook(newBook)
            })
        }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="add-book-form">
                <h3>Add New Book</h3>
                <input 
                    type="text"
                    name="img_url"
                    onChange={handleChange}
                    value={formData.img_url}
                    placeholder="Add image here..."
                    className="input-text"
                />
                <br />
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={formData.title}
                    placeholder="Enter book title here..."
                    className="input-text"
                />
                <br />
                <ButtonGroup variant='contained' color='secondary'>
                <Button
                variant="fill" color="primary" type="submit"
                    type="submit"
                    name="submit"
                    value="Add New Book"
                    className="submit"
                >Add New Book</Button></ButtonGroup>
            </form>
        </div>
    )
}

export default BookForm
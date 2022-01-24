import React, { useState } from "react";

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

        fetch("https://salty-fortress-94451.herokuapp.com/api/books", {
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
                <input 
                    type="submit"
                    name="submit"
                    value="Add New Book"
                    className="submit"
                />
            </form>
        </div>
    )
}

export default BookForm
import React from "react";
import BookCard from "./BookCard";

function BookContainer({ books, onDeleteBook, onUpdateBook }) {
    const bookCards = books.map((book) => (
        <BookCard
            key={book.id}
            book={book}
            onDeleteBook={onDeleteBook}
            onUpdateBook={onUpdateBook}
        />
    ))

    return (
        <div id="book-collection">{bookCards}</div>
    )
}

export default BookContainer
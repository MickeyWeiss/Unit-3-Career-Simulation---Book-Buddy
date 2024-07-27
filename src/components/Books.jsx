/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { useState } from 'react'
import { useEffect } from 'react'

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books", {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(result => {
            if (result.books && Array.isArray(result.books)) {
                setBooks(result.books)
            } else {
                console.error('There is an error')
                setBooks([])
            }
             
        })
        .catch(console.error)
    }, [])
    console.log(books)

    const handleDetailsClick = (book) => {
        const bookDetails = `
            Title: ${book.title}
            Author: ${book.author}
            Description: ${book.description}
            Available: ${book.available ? 'Yes, we have it' : 'Sorry, this book is out'}`
            alert(bookDetails)    
    }

    return (
        <div className = 'booksDiv'>
            <h2>Library Books</h2>
            <div className = 'booksList'>
                {books.map((book) => (
                    <div key={book.id} className='aBook'>
                        <img src={book.coverimage} alt={book.title} className='bookCover'/>
                        <div className="bookInfo">
                            <h5 className='bookTitle' onClick={() => handleDetailsClick(book)}>{book.title}</h5>
                            <button className='bookButton'>View Book</button>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default Books
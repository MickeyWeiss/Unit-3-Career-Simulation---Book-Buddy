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
}
export default Books
/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useState } from 'react'
import { useEffect } from 'react'

const SingleBook = ({bookId}) => {
    const [book, setBook] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/:${bookId}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Response not OK')
            }
            return response.json()
        })
        .then(result => setBook(result))
        .catch(error => {
            console.error('error fetching book')
        })
    }, [bookId])
}

export default SingleBook
/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useState } from 'react'
import {useEffect } from 'react'
import ReactDOM from 'react-dom/client'

export default function SingleBook({}){
    const [book, setBook] = useState("")
    useEffect(() => {
        async function fetchSingleBook(bookID){
            try {
                const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/" + {bookID})
                const result = await response.json()
                setBook(result)
            }catch (error){
                console.log(error)
            }
        }
    fetchSingleBook()}, [])
    console.log(book)
    
    return (
    <div>
        <label>Search the Library: </label>
        <input type="text"></input>
        <button>Search</button>
    </div>        

    )
    
}
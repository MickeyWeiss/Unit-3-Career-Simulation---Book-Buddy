import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import bookLogo from './assets/books.png'
import Books from './components/Books.jsx'
import SingleBook from './components/SingleBook.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Account from './components/Account.jsx'
import Navigations from './components/Navigations.jsx'
import Home from './components/Home.jsx'

function App() {
  const [token, setToken] = useState(null)

  const handleLogout = () => {
    setToken(null)
  }


  return (
    <>
  <div id='nav-bar-container'>
    <div id='navbar'>
      <Link to={"/"}>Home</Link>
      <Link to={"/account"}>Account</Link>
      <Link to={"/books"}>Books</Link>
      <Link to= {"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>

    </div>
  <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/books" element={<Books/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </div>
  </div>

      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <p>Don't forget to set up React Router to navigate between the different views of your single page application!</p>
    </>
  )
}

export default App

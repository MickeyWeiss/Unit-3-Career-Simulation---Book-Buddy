import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

    {/* <Router>
      <div>
        <Navitations user = {user} />
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/books' element = {<Books />} />
          <Route path = '/accout' elemnt = {<Account user = {user} onLogin = {handleLogin} />} />
          <Route path = '/register' element ={<Register />} />
        </Routes>
      </div>
    </Router> */}

    {/* <Navigations /> */}
    <Home />
    <Account />
    <Register />
    <Login />
    <Books />
    <SingleBook />

      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <p>Don't forget to set up React Router to navigate between the different views of your single page application!</p>
    </>
  )
}

export default App

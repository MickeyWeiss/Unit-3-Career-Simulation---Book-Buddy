/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import { useState} from 'react'
import { Link } from 'react-router-dom'

const Navigations = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to = '/'>Home</Link>
                </li>
                <li>
                    <Link to = '/register'>Create an Library Account</Link>
                </li>
                <li>
                <Link to = '/books'>View All Library Books</Link>
                </li>
                <li>
                <Link to = '/account'>My Account</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigations
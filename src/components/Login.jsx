/* TODO - add your code to create a functional React component that renders a login form */

import { useState } from 'react'
import { useEffect } from 'react'

const Login = ({userLogin}) => {
    const [eMail, setEMail] = useState ('')
    const [password, setPassword] = useState ('')

    const handleLoginSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    eMail,
                    password,
                })
            })
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error (errorData.message)
            }

            const userData = await response.json()
            userLogin(userData)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (

        <div>

            <h3>Login to your Library Account</h3>
            <form onSubmit = {handleLoginSubmit}>
                <label>E-Mail: </label>
                <input type = 'text' value = {eMail} onChange = {(event) => setEMail(event.target.value)}></input>

                <label>Password: </label>
                <input type = 'password' value = {password} onChange = {(event) => setPassword(event.target.value)}></input>

                <button type = 'submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
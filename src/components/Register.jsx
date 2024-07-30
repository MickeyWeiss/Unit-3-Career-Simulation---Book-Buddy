/* TODO - add your code to create a functional React component that renders a registration form */

import { useState } from 'react'
import { useEffect } from 'react'

const Register = () => {
    const [registerInfo, setRegisterInfo] = useState ({
        firstName: '',
        lastName: '',
        eMail: '',
        password: '',
    })
    const [error, setError] = useState('')

    const handleRegisterChange = (event) => {
        const {name, value} = event.target
        setRegisterInfo({...registerInfo, [name]: value})
    }

    const handleRegisterSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerInfo),
            })
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message)
            }

        }catch (error) {
            setError(error.message)
        }
    }

    return(
        <div>
            <h2>Create a Library Account</h2>
            {error && <p className='error'>{error}</p>}
            <form onSubmit = {handleRegisterSubmit}>
                <label>First Name: </label>
                <input type = 'text' name ='firstName' value = {registerInfo.firstName} onChange = {handleRegisterChange}/>
                
                <label>Last Name: </label>
                <input type = 'text' name = 'lastName' value = {registerInfo.lastName} onChange = {handleRegisterChange}/>
                
                <label>E-Mail: </label>
                <input type ='email' name = 'eMail' value = {registerInfo.eMail} onChange = {handleRegisterChange}/>

                <label>Password: </label>
                <input type ='password' name = 'password' value = {registerInfo.password} onChange = {handleRegisterChange}/>

                <button type = 'submit'>Create Account</button>
            </form>

        </div>

    )

}
export default Register
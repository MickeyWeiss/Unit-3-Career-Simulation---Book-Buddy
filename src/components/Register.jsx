/* TODO - add your code to create a functional React component that renders a registration form */

import { useState } from 'react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

export default function SignUpForm(){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    async function handleSubmit(event){
        event.preventDefault();
        try {
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/docs/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                }) 
            });
            const result = await response.json();
            console.log(result)
            setToken(result.token);

        }catch (error){
            setError(error.message);
        }
    }
return (
<>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(e) => setUserName(e.target.value)}/>
        </label>
        <label>
            Password: <input type ="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button>Register</button>
    </form>

</>
)}

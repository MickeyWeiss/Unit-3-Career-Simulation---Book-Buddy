/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { useState } from 'react'
import { useEffect } from 'react'
import Login from './Login.jsx'

const Account = ({userLogin}) => {
    const [successMessage, setSuccessMessage] = useState(null)
    const [accountDetails, setAccountDetails] = useState([])

    useEffect (() => {
        const accountInfo = async () => {
            if (successMessage) {
                try {
                    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/user/', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${successMessage.token}`,
                        }
                    })

                    if (!response.ok) {
                        throw new Error ('Could not access account')
                    }

                    const accountData = await response.json()
                    setSuccessMessage({...successMessage, ...accountData})
                } catch (error) {
                    console.error(error.message)
                }
            }
        }

        accountInfo()
    }, [successMessage])

    const handleAccount = (accountData) => {
        setSuccessMessage (accountData)
        if (userLogin) {
            userLogin(accountData)
        }
    }

    const bookCheckout = async () => {
        try {
            const response = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/${successMessage.id}/checked-out`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${successMessage.token}`,
                }
            })

            if (!response.ok) {
                throw new Error('Could not access account')
            }

            const checkedOut = await response.json()
            setAccountDetails(checkedOut)
        } catch (error) {
            console.error (error.message)
        }
    }

    const bookReturn = async () => {
        try {
            response = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/${successMessage.id}/checked-out`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${successMessage.token}`
                }
            })

            if (!response.ok) {
                throw new Error ('Could not access account')
            }

            const returned = await response.json()
            setAccountDetails(returned)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div>
            {successMessage ? (
                <div>
                    <h2>Welcome Library Patron!</h2>
                    <div>
                        <h3></h3>
                        {accountDetails.length === 0 ? (
                            <p>Currently you have no books checked out</p>
                        ) : ( 
                            <ul>
                                {accountDetails.map((book) => (
                                    <li key = {book.id}>
                                    <div>
                                    {book.title} , {book.author}
                                    </div>
                                    <button onClick ={bookReturn}>Return a Book
                                    </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
        </div>
    ) : (
        <div>
            <p></p>
            <Login userLogin = {handleAccount} />
            <p></p>
        </div>
    )}
    </div>
    )


}

export default Account 
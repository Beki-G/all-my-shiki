import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button onClick={() => loginWithRedirect()} className="block uppercase shadow bg-indigo-800 hover:bg-indigo-700 focus:ring focus:outline-none text-white text-xs py-3 px-10 rounded">
            Log In
        </button>
    )
}

export default LoginButton

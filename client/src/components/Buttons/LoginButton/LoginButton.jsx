import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button onClick={() => loginWithRedirect()} className="block uppercase shadow bg-old-mauve hover:bg-cinnabar  focus:ring focus:outline-none text-white text-xs py-3 px-10 rounded">
            Log In
        </button>
    )
}

export default LoginButton

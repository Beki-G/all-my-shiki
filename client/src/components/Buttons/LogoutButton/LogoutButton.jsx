import React from 'react'
import { UseUserSession } from "../../../utils/UserContext";

const LogoutButton = () => {
    const { logoutMethod } = UseUserSession();
    return (
        <button onClick={(e)=>{e.preventDefault(); logoutMethod()}}  className="block uppercase mx-auto sm:mx-0 sm:ml-3 shadow bg-indigo-800 hover:bg-indigo-700 focus:ring focus:outline-none text-white text-xs py-3 px-10 rounded">
            Log Out
        </button>
    )
}

export default LogoutButton

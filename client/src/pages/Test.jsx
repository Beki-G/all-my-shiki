import React from 'react'
import { UseUserSession } from "../utils/userContext";


//test component to test useContext

const Test = () => {
    const { userProfile } = UseUserSession();
    console.log("user Profile in Test", userProfile)
    return (
        <div>
            {userProfile.userName}
        </div>
    )
}


export default Test
import { createContext, useContext } from 'react'

export const UserSessionContext = createContext({
    userProfile: null,
    loginMethod:null, 
    logoutMethod:null,
})

export function UseUserSession() {
    const { userProfile, loginMethod, logoutMethod } = useContext(UserSessionContext);
    return {userProfile, loginMethod, logoutMethod}
}


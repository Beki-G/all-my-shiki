import { createContext, useContext } from 'react'

export const UserSessionContext = createContext({
    userProfile: null,
    login:()=>{}, 
    logout:()=>{},
})

export function UseUserSession() {
    const { userProfile, login, logout } = useContext(UserSessionContext);
    return {userProfile, login, logout}
}


import { createContext, useContext } from 'react'

export const UserSessionContext = createContext({
    userProfile: null,
    databaseProfile:null,
    login:()=>{}, 
    logout:()=>{},
})

export function UseUserSession() {
    const { userProfile, databaseProfile, login, logout } = useContext(UserSessionContext);
    return {userProfile, databaseProfile, login, logout}
}


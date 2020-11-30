/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import userAPI from "./userAPI";
import Loading from "../components/Auth/Loading";

const UserSessionContext = createContext({
  userProfile: null,
  loginMethod: null,
  logoutMethod: null,
});

const UserSessionProfileUpdateContext = createContext({updateUser:null});


export function UseUserSession() {
  const { userProfile, loginMethod, logoutMethod } = useContext(UserSessionContext);
  return { userProfile, loginMethod, logoutMethod };
}

export function UpdateUserSession() {
  const {updateUser} =  useContext(UserSessionProfileUpdateContext);
  return updateUser
}

export default function UserSessionProvider({ children }) {
  const [userProfile, setUserProfile] = useState({
    userName: "Wandering Onmyoji",
  });

  const { user, logout, loginWithRedirect, isLoading } = useAuth0();

  useEffect(() => {
    fetchUserData();
  }, [user]);

  async function fetchUserData() {
    if (user !== undefined) {
      let userName, dbProfile;

      //Discord UserNames are not imported so this is a back up
      user.nickname === ""
        ? (userName = "O Great Nameless One")
        : (userName = user.nickname);

      const userNewProfile = {
        userName: userName,
        auth0Id: user.sub,
      };

      // check to see if user exists in DB if it does get profile otherwise create new profile
      const isUser = await userAPI.isUser(userNewProfile.auth0Id);
      isUser
        ? (dbProfile = await userAPI.getUser(userNewProfile.auth0Id))
        : (dbProfile = await userAPI.createUser(userNewProfile));

      setUserProfile(dbProfile);
    } else {
      setUserProfile({ userName: "Wandering Onmyoji" });
      // console.log(logout);
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <UserSessionContext.Provider
      value={{
        userProfile: userProfile,
        loginMethod: loginWithRedirect,
        logoutMethod: logout,
      }}
    >
      <UserSessionProfileUpdateContext.Provider value={{updateUser:fetchUserData}}>
        {children}
      </UserSessionProfileUpdateContext.Provider>
    </UserSessionContext.Provider>
  );
}


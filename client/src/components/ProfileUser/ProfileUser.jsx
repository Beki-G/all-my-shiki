/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { UseUserSession, UpdateUserSession } from "../../utils/UserContext";
import { EditProfileBtn } from "../Buttons/EditProfileBtn/EditProfileBtn";
import Modal from "../Modal/Modal";
import userAPI from "../../utils/userAPI";

export const ProfileUser = () => {
  let { userProfile } = UseUserSession();
  const updateProfile = UpdateUserSession();

  console.log("userProfile is: ", userProfile)

  const [isOpen, setIsOpen] = useState(false);
  const [dateJoined, setDateJoined] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [userEdits, setUserEdits] = useState({
    userName: userProfile.userName,
    guild: userProfile.guild,
  });
  const [modalText, setModalText] = useState({ modalTxt: "" });
  
  const { dateCreated,  _id } = userProfile;

  useEffect(() => {
    if (dateCreated) {
      const tempDate = new Date(dateCreated);
      const formattedDate =
        tempDate.getMonth() +
        1 +
        "/" +
        tempDate.getDate() +
        "/" +
        tempDate.getFullYear();
      setDateJoined(formattedDate);
    }
  }, [userProfile]);

  const onSubmit = async (e) => {
    e.preventDefault();
    //close editiong
    setIsEdit(!isEdit);
    //check if username is available
    const isUsername = await userAPI.isUsernameAvailable(userEdits.userName);
    //if it is send update then prompt user
    //else prompt user to choose another username
    if (!isUsername) {
      const newProfile = await userAPI.updateUser(_id, userEdits);
      console.log("New Profile is", newProfile);
      // eslint-disable-next-line no-const-assign
      // setContext({...context, userProfile: newProfile});
      // setUserProfile(newProfile)
      updateProfile();
      setModalText({ modalTxt: "Thank you for updating!" });
      setIsOpen(true);
    } else {
      setModalText({ modalTxt: "Username is already taken, please choose another." });
      setIsOpen(true);
    }
  };

  const handleInputChanges = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setUserEdits({
      ...userEdits,
      [name]: value,
    });

    console.log("UserEdits", userEdits)
  };

  return (
    <div className="flex flex-col mx-auto m-0 w-3/4">
      <div className="mt-4 mb-2 text-xl font-semibold text-center">
        User Profile
      </div>
      <form onSubmit={onSubmit}>
        <label htmlFor="userName">
          UserName:
          <br />
          <input
            id="userName"
            type="text"
            name="userName"
            placeholder={` ${userProfile.userName}`}
            disabled={!isEdit}
            onChange={handleInputChanges}
          />
        </label>
        <br />
        <label htmlFor="dateJoined">
          Date Joined:
          <br />
          <input
            id="dateJoined"
            type="text"
            name="dateJoined"
            placeholder={` ${dateJoined}`}
            disabled
          />
        </label>
        <br />
        <label htmlFor="guild">
          Guild:
          <br />
          <input
            id="guild"
            type="text"
            name="guild"
            placeholder={userProfile.guild}
            disabled={!isEdit}
            onChange={handleInputChanges}
          />
        </label>
        <br />
        <div className="mt-6">
          {isEdit ? (
            <input
              className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
              type="submit"
              value="Submit"
            />
          ) : (
            <EditProfileBtn setIsEdit={setIsEdit} />
          )}
        </div>
      </form>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {modalText.modalTxt}
      </Modal>
    </div>
  );
};

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { UseUserSession } from "../../utils/userContext";
import { EditProfileBtn } from "../Buttons/EditProfileBtn/EditProfileBtn";
import Modal from "../Modal/Modal";

export const ProfileUser = () => {
  const { userProfile } = UseUserSession();
  const { dateCreated, userName, guild } = userProfile;

  const [isOpen, setIsOpen] = useState(false);
  const [dateJoined, setDateJoined] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [userEdits, setUserEdits] = useState({
    userName: userName,
    guild: guild,
  });
  const [modalText, setModalText] = useState({ modalTxt: "" });

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

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
    setModalText({ modalTxt: "Thank you for editing!" });
    setIsOpen(true);
  };

  const handleInputChanges = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setUserEdits({
      ...userEdits,
      [name]: value,
    });
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
            placeholder={` ${userName}`}
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
            placeholder={guild}
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

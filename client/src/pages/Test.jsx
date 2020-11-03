import React, { useState } from "react";
import { UseUserSession } from "../utils/userContext";
import Modal from "../components/Modal/Modal";

//test component to test useContext

const Test = () => {
  const { userProfile } = UseUserSession();
  const [isOpen, setIsOpen] = useState(false);

  console.log("user Profile in Test", userProfile);
  return (
    <>
      <div>{userProfile.userName}</div>
      <button onClick={()=> setIsOpen(true)}>Open Modal</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </Modal>
    </>
  );
};

export default Test;

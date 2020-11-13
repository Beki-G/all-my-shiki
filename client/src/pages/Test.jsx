import React, { useState } from "react";
import { UseUserSession } from "../utils/UserContext";
import Modal from "../components/Modal/Modal";
import Loading from "../components/Auth/Loading";

//test component to test useContext

const Test = () => {
  const { userProfile } = UseUserSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>{userProfile.userName}</div>
      <button onClick={()=> setIsOpen(true)}>Open Modal</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </Modal>

      <Loading/>
    </>
  );
};

export default Test;

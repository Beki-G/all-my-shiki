import React, { useState, useEffect } from "react";
import { DeleteCharacterButton } from "../Buttons/DeleteCharacterButton/DeleteCharacterButton";
import { Link } from "react-router-dom";

const DashboardModCharaCard = ({
  name,
  soulSetMain,
  soulSetSub,
  dateCreated,
  userNotes,
  characterId,
}) => {
  const [dateFormatted, setDateFormatted] = useState();

  useEffect(() => {
    if (dateCreated) {
      const unformatted = new Date(dateCreated);
      const newFormat =
        unformatted.getMonth() +
        1 +
        "/" +
        unformatted.getDate() +
        "/" +
        unformatted.getFullYear();
      setDateFormatted(newFormat);
    }
  }, [dateCreated]);

  return (
    <div className=" my-1 px-1 w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:w-1/3  ">
      <DeleteCharacterButton
        characterId={characterId}
        characterType={"modified"}
      />
      <div className=" items-center p-4 bg-white rounded-lg shadow dark:bg-gray-800 min-w-40 mt-2 mr-2">
        {/* <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                    Replace with Shiki Image
                  </div> */}

        <div className="text-left">
          <Link className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-400" to={`/shiki/${characterId}`}>
            {name}
          </Link>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
            Date Created: {dateCreated ? dateFormatted : "N/A"}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
            Soul Set Main: {soulSetMain ? soulSetMain : "N/A"}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
            Soul Set Sub: {soulSetSub ? soulSetSub : "N/A"}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
            Notes: {userNotes ? userNotes : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardModCharaCard;

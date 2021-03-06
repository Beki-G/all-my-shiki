import React from "react";
import { Link } from "react-router-dom";
import { DeleteCharacterButton } from "../Buttons/DeleteCharacterButton/DeleteCharacterButton";

const DashboardFavoritesCard = ({
  name,
  soulSetMain,
  soulSetSub,
  characterId,
}) => {
  return (
    <div className="inline-block mr-2 ml-1">
      <DeleteCharacterButton
        characterId={characterId}
        characterType={"favorite"}
      />
      <div className=" items-center p-4 mt-2 mr-2 bg-white rounded-lg shadow dark:bg-gray-800 min-w-40">
        {/* <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                    Replace with Shiki Image
                  </div> */}

        <div>
          <Link
            className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-400"
            to={`/shiki/${characterId}`}
          >
            {name}
          </Link>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
            Soul Set Main: {soulSetMain ?  soulSetMain  : "N/A"}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
            Soul Set Sub: {soulSetSub ?  soulSetSub  : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardFavoritesCard;

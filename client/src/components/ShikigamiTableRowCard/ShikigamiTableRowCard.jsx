import React from "react";
import { Link } from "react-router-dom";

const ShikigamiTableRowCard = (row) => {
  const { original } = row;

  const getFormattedDate = (oldDate) => {
    const unformatted = new Date(oldDate);
    let newFormat =
      unformatted.getMonth() +
      1 +
      "/" +
      unformatted.getDate() +
      "/" +
      unformatted.getFullYear().toString().substr(-2);

    if (newFormat === "NaN/NaN/aN") newFormat = "N/A";

    return newFormat;
  };

  return (
    <div className="pb-2">
      <div className="my-2 ">
        <Link
          to={`/shiki/${original._id}`}
          className="text-gray-800 font-semibold text-lg  hover:text-purple-600 focus:text-purple-600"
        >
          {original.name}
        </Link>
        <div className="flex flex-wrap -mx-px overflow-hidden mt-2 md:-mx-1 font-medium sm:w-full  md:text-center lg:text-left lg:w-3/4 lg:mx-auto">
          <div className="my-px px-px w-full overflow-hidden sm:w-1/2 md:px-1 md:w-1/3">
            <span className="bg-old-mauve opacity-90 inline-block text-white rounded-md px-1 ">
              Built By:
            </span>{" "}
            {original.creatorId.userName}
          </div>
          <div className="my-px px-px w-full overflow-hidden sm:w-1/2 md:px-1 md:w-1/3">
            <span className="bg-old-mauve opacity-90 inline-block text-white rounded-md px-1 ">
              Base:
            </span>{" "}
            {original.character.name}
          </div>
          <div className="my-px px-px w-full overflow-hidden sm:w-1/2 md:px-1 md:w-1/3">
            <span className="bg-old-mauve opacity-90 inline-block text-white rounded-md px-1 ">
              Date Created
            </span>{" "}
            {getFormattedDate(original.dateCreated)}
          </div>
          <div className="my-px px-px w-full overflow-hidden sm:w-1/2 md:px-1 md:w-1/3">
            <span className="bg-old-mauve opacity-90 inline-block text-white rounded-md px-1 ">
              Date Modified
            </span>{" "}
            {getFormattedDate(original.dateModified)}
          </div>
          <div className="my-px px-px w-full overflow-hidden sm:w-1/2 md:px-1 md:w-1/3">
            <span className="bg-old-mauve opacity-90 inline-block text-white rounded-md px-1 ">
              4 Soul Set:
            </span>{" "}
            {original.soulsetMain?.name || "N/A"}
          </div>
          <div className="my-px px-px w-full overflow-hidden sm:w-1/2 md:px-1 md:w-1/3">
            <span className="bg-old-mauve opacity-90 inline-block text-white rounded-md px-1 ">
              2 Soul Set:
            </span>{" "}
            {original.soulsetSub?.name || "N/A"}
          </div>
          <div className="my-px px-px w-full overflow-hidden sm:w-1/2 md:px-1 md:w-1/3">
            <span className="bg-old-mauve opacity-90 inline-block text-white rounded-md px-1 ">
              Slots 2/4/6:
            </span>{" "}
            {original?.soulsetSlotTwo || "N/A"}/
            {original?.soulsetSlotFour || "N/A"}/
            {original?.soulsetSlotSix || "N/A"}
          </div>
          <div className="my-px px-px w-full overflow-hidden sm:w-1/2 md:px-1 md:w-1/3">
            <span className="bg-old-mauve opacity-90 inline-block text-white rounded-md px-1 ">
              UserNotes:
            </span>{" "}
            {original.userNotes || "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShikigamiTableRowCard;

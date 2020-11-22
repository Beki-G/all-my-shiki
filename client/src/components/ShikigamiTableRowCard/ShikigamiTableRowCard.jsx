import React from "react";
import {Link} from "react-router-dom"

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
      <div className="">
        
          <Link to={`/shiki/${original._id}`} className="text-gray-800 font-thin text-lg">{original.name}</Link>
          <div className="flex flex-wrap -mx-px overflow-hidden md:-mx-1">
            <div className= "my-px px-px w-full overflow-hidden sm:w-1/2 md:my-1 md:px-1 md:w-1/3">
            Submitted By: {original.creatorId.userName}
            </div>
            <div className= "my-px px-px w-full overflow-hidden sm:w-1/2 md:my-1 md:px-1 md:w-1/3">
            Base: {original.character.name}
            </div>
            <div className= "my-px px-px w-full overflow-hidden sm:w-1/2 md:my-1 md:px-1 md:w-1/3">
            Date Created: {getFormattedDate(original.dateCreated)}
            </div>
            <div className= "my-px px-px w-full overflow-hidden sm:w-1/2 md:my-1 md:px-1 md:w-1/3">
            Date Modified: {getFormattedDate(original.dateModified)}
            </div>
            <div className= "my-px px-px w-full overflow-hidden sm:w-1/2 md:my-1 md:px-1 md:w-1/3">
            4 Soul Set: {original.soulsetMain?.name || "N/A"}
            </div>
            <div className= "my-px px-px w-full overflow-hidden sm:w-1/2 md:my-1 md:px-1 md:w-1/3">
            2 Soul Set: {original.soulsetSub?.name || "N/A"}
            </div>
            <div className= "my-px px-px w-full overflow-hidden sm:w-1/2 md:my-1 md:px-1 md:w-1/3">
            Slots 2/4/6: {original?.soulsetSlotTwo ||"N/A"}/{original?.soulsetSlotFour ||"N/A"}/{original?.soulsetSlotSix ||"N/A"}
            </div>
            <div className= "my-px px-px w-full overflow-hidden sm:w-1/2 md:my-1 md:px-1 md:w-1/3">
            UserNotes: {original.userNotes ||"N/A"}
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default ShikigamiTableRowCard;

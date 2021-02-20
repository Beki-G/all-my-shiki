import React from "react";
import { Link } from "react-router-dom";

const CreateTeamCharacterProfile = ({ teammate, profile }) => {
  //   console.log('teammate: ', teammate)
  // console.log("profile", profile);
  return (
    <div className="my-1 px-1 w-full sm:w-1/2 lg:w-1/5" >
      <div  className="bg-white font-black ml-2 mb-2">
      <div className="max-w-sm rounded bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl tracking-wide">{profile.name}</div>
          <div className="text-gray-500 text-sm mb-3">
            {profile.character.name}
          </div>
          <div className="text-gray-500 text-base">
            <div className="font-medium underline">Soul Sets:</div>
            <div>4 set: {profile.soulsetMain?.name || "N/A"}</div>
            <div>2 set: {profile.soulsetSub?.name || "N/A"}</div>
          </div>
        </div>
        <div className="mx-4 mt-2 mb-4">
          <Link
            className="tracking-wider font-bold mb-2 text-cinnabar hover:bg-opacity-10  hover:bg-cinnabar rounded p-2 inline-block"
            to={"/shiki/" + profile._id}
            target="_blank"
          >
            Profile
          </Link>
        </div>
      </div>

      </div>
    </div>
  );
};

export default CreateTeamCharacterProfile;

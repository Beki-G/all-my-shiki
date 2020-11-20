/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import userAPI from "../../utils/userAPI";
import { UseUserSession } from "../../utils/UserContext";
import DashboardFavoritesCard from "../DashboardFavoritesCard/DashboardFavoritesCard";

const DashboardFavorites = () => {
  const { userProfile } = UseUserSession();

  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    getFavoritesInfo();
  }, [userProfile]);

  async function getFavoritesInfo() {
    if (userProfile._id) {
      const { favorites } = await userAPI.getFavoritesInfo(userProfile._id);
      // console.log("this is the users Favorites: ", favorites);
      setUserFavorites(favorites);
    }
  }

  return (
    <div className="  mx-auto m-0 w-3/4 bg-gray-200 p-4 rounded">
      <h1 className="mt-4 mb-2 text-2xl font-semibold ">Favorites</h1>
      <div className="overflow-x-scroll overflow-auto text-center  flex">
        {userFavorites && userFavorites.length > 0 ? (
          userFavorites.map((favored) => {
            return (
              <DashboardFavoritesCard
                key={favored._id}
                name={favored.name}
                characterId={favored._id}
                soulSetMain={favored.soulsetMain?.name}
                soulSetSub={favored.soulsetSub?.name}
              />
            );
          })
        ) : (
          <p>You will see all your favorites here</p>
        )}
      </div>
    </div>
  );
};

export default DashboardFavorites;

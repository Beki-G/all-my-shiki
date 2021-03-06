import React, { useState, useEffect } from "react";
import soulSetAPI from "../../utils/soulSetAPI";

export const SoulSetDropDown = ({ title, soulSetValue, onChange, isEdit, setType }) => {
  const [soulSetData, setSoulSetData] = useState([]);

  useEffect(() => {
    getSoulSetNames();
  }, []);

  const getSoulSetNames = async () => {
    const soulSetInfo = await soulSetAPI.getAllSoulSets();
    // console.log("SoulSetInfo: ", soulSetInfo);
    setSoulSetData(soulSetInfo);
  };

  return (
    <label>
      {title}
      <select
        value={soulSetValue ? soulSetValue : ""}
        onChange={onChange}
        disabled={!isEdit}
        className="rounded-md focus:outline-none focus:ring-2 ring-sky-blue mt-2 mr-2"
      >
        
        {soulSetData.map((soulSet) => {
          return (
            <option value={soulSet._id} key={soulSet._id} settype={setType}>
              {soulSet.name}
            </option>
          );
        })}
      </select>
    </label>
  );
};
export default SoulSetDropDown;

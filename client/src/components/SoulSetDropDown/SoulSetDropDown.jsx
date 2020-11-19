import React, { useState, useEffect } from "react";
import soulSetAPI from "../../utils/soulSetAPI";

export const SoulSetDropDown = ({ title, soulSetValue, onChange, isEdit }) => {
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
        value={soulSetValue ? soulSetValue : "N/A"}
        onChange={onChange}
        disabled={!isEdit}
      >
        <option value="N/A">N/A</option>
        {soulSetData.map((soulSet) => {
          return (
            <option value={soulSet._id} key={soulSet._id}>
              {soulSet.name}
            </option>
          );
        })}
      </select>
    </label>
  );
};
export default SoulSetDropDown;

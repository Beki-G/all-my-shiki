/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import CharacterAPI from "../../utils/characterAPI";

const OnmyojiDropDown = ({ host, label, onChange, isEdit, defaultVal}) => {
  const [dropdownOptions, setDropdownOptions] = useState([]);

  useEffect(() => {
    setOptions();
  }, [host]);

  const setOptions = async () => {
    if (host === "onmyoji") {
      setDropdownOptions([
        { name: "Seimei" },
        { name: "Kagura" },
        { name: "Yaobikuni" },
        { name: "Hiromasa" },
      ]);
    } else {
      const options = await CharacterAPI.getCharacterNames();
      setDropdownOptions(options);
    }
  };

  return (
    <div className="my-2 py-2 bg-gray-200 rounded-md ">
      <label>
        {label}
        <select
          onChange={onChange}
          className="focus:outline-none focus:ring-2 focus:ring-purple-700"
          disabled={!isEdit }
          value={defaultVal}
        >
          {dropdownOptions.map((onmyoji) => {
            return (
              <option key={onmyoji.name} value={onmyoji.name}>
                {onmyoji.name}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default OnmyojiDropDown;

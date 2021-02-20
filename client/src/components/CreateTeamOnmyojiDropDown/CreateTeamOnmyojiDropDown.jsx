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
        {name: "~~Please Choose~~"},
        { name: "Seimei" },
        { name: "Kagura" },
        { name: "Yaobikuni" },
        { name: "Hiromasa" },
      ]);
    } else {
      const options = await CharacterAPI.getCharacterNames();
      options.unshift({name: "~~Please Choose~~"})
      setDropdownOptions(options);
    }
  };

  return (
    <div className="my-2 py-2  rounded-md ">
      <label>
        {label}
        <select
          onChange={onChange}
          className="focus:outline-none focus:ring-2 focus:ring-sky-blue rounded-md bg-gray-100 focus:bg-white ring-1 ring-grey-50"
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

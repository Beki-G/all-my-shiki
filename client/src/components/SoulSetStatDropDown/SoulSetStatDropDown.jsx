/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const SoulSetStatDropDown = ({
  title,
  subSetValue,
  slot,
  isEdit,
  onChange,
}) => {
  const [slotOptions, setSlotOptions] = useState(["ATK", "HP", "DEF"]);

  useEffect(() => {
    soulSlotsOptions();
  }, [slot]);

  const soulSlotsOptions = () => {
    let options;
    switch (slot) {
      case 2:
        options = ["N/A","ATK Bonus", "HP Bonus", "DEF Bonus", "SPD"];
        break;
      case 4:
        options = ["N/A", "ATK Bonus", "HP Bonus", "DEF Bonus", "EFT RES", "EFT HIT"];
        break;
      case 6:
        options = ["N/A", "ATK Bonus", "HP Bonus", "DEF Bonus", "CRIT", "CDMG"];
        break;

      default:
        options = ["N/A", "ATK", "HP", "DEF"];
        break;
    }

    setSlotOptions(options);
  };

  return (
    <label>
      {title}
      <select
        value={subSetValue ? subSetValue : "N/A"}
        disabled={!isEdit}
        onChange={onChange}
        className="rounded-md focus:outline-none focus:ring-2 ring-sky-blue mt-1 mr-2"
      >
        {slotOptions?.map((option, index) => {
          return (
            <option value={option} key={index} slot={slot}>
              {option}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default SoulSetStatDropDown;

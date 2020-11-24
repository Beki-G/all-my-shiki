import React from "react";

const TeamFormatDropDown = ({ onChange, isEdit, teammates }) => {
  const options = [
    { name: "6 Shiki + Onmyoji", teammates: 6, onmyoji: "onmyoji" },
    { name: "5 Shiki + Onmyoji", teammates: 5, onmyoji: "onmyoji" },
    { name: "3 Shiki + Onmyoji", teammates: 3, onmyoji: "onmyoji" },
    { name: "6 Shiki + Event Shiki", teammates: 6, onmyoji: "event" },
    { name: "5 Shiki + Event Shiki", teammates: 5, onmyoji: "event" },
    { name: "3 Shiki + Event Shiki", teammates: 3, onmyoji: "event" },
    { name: "6 Shiki (Draft)", teammates: 6, onmyoji: "none" },
  ];
  return (
    <label>
      Team Format:
      <select
        defaultValue={5}
        className="ml-2 focus:outline-none focus:ring-2 focus:ring-purple-700"
        disabled={!isEdit}
        onChange={onChange}
      >
        {options.map((format, index) => {
          return (
            <option
              key={index}
              value={format.teammates}
              data-onmyoji={format.onmyoji}
            >
              {format.name}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default TeamFormatDropDown;

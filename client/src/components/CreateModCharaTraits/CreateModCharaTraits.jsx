import React from "react";

const CreateModCharaTraits = ({ tags }) => {
  return (
    <div>
      <div className="text-2xl">Traits</div>

      <ul className="list-disc list-inside">
        {tags.map((trait, index) => {
          return <li key={index}>{trait.tag}</li>;
        })}
      </ul>
      <br />
    </div>
  );
};

export default CreateModCharaTraits;

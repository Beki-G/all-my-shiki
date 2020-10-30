import React from "react";

function TagResultsLink({ name, id }) {
  const url = "";
  return (
    <div>
      <a href={url} data-id={id}>
        {name}
      </a>
    </div>
  );
}

export default TagResultsLink;

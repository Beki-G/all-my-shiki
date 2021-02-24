import React from "react";
import { ADVANCED_SEARCH_ACTIONS } from "../../pages/AdvancedSearch";

const AdvancedSearchFilterCheckbox = ({ tag, dispatch }) => {
  const onChange = (e) => {
    if (e.target.checked) {
      dispatch({
        type: ADVANCED_SEARCH_ACTIONS.ADD_TO_INCLUDES,
        payload: { name: e.target.value },
      });
    } else
      dispatch({
        type: ADVANCED_SEARCH_ACTIONS.REMOVE_FROM_INCLUDES,
        payload: { name: e.target.value },
      });
  };

  return (
    <div className=" my-1 px-1 w-full overflow-hidden sm:w-1/2 lg:w-1/3">
      <input id={tag._id} type="checkbox" value={tag.tag} onChange={onChange} />
      <label htmlFor={tag._id}>{" " + tag.tag}</label>
    </div>
  );
};

export default AdvancedSearchFilterCheckbox;

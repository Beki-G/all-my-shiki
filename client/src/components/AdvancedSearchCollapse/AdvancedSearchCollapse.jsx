import React, { useReducer } from "react";
import Collapse from "@kunukn/react-collapse";
import Down from "./Down";
import "./styles.css";
import AdvancedSearchFilterCheckbox from "../AdvancedSearchFilterCheckbox/AdvancedSearchFilterCheckbox";
import { ADVANCED_SEARCH_ACTIONS } from "../../pages/AdvancedSearch";

function reducer(state, { type, index }) {
  switch (type) {
    case "expand-all":
      const expandStateArr = state.map(() => {
        return true;
      });
      return expandStateArr;
    case "collapse-all":
      const collapseStateArr = state.map(() => {
        return false;
      });
      return collapseStateArr;
    case "toggle":
      state[index] = !state[index];
      return [...state];

    default:
      throw new Error();
  }
}

function Block({ isOpen, title, onToggle, children }) {
  return (
    <div className="">
      <button
        className="toggle flex justify-between text-white bg-transparent shadow-none w-full m-0 text-left p-2"
        onClick={onToggle}
      >
        <span>{title}</span>
        <Down isOpen={isOpen} />
      </button>
      <Collapse layouteffect="true" isOpen={isOpen}>
        {children}
      </Collapse>
    </div>
  );
}

const AdvancedSearchCollapse = ({ initialState, tagData, dispatch2 }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mx-auto flex flex-col mb-4">
      <div className="mx-auto ">
        <button
          className="bg-transparent mr-4 text-white disabled:text-old-mauve disabled:opacity-90"
          onClick={() => dispatch({ type: "expand-all" })}
          disabled={state.every((s) => s === true)}
        >
          Expand all
        </button>
        <button
          className="bg-transparent mr-4 p-3 text-white disabled:text-old-mauve disabled:opacity-90 transition-opacity duration-300"
          onClick={() => dispatch({ type: "collapse-all" })}
          disabled={state.every((s) => s === false)}
        >
          Collapse all
        </button>
        <button
          className="bg-transparent mr-4 p-3 text-white disabled:text-old-mauve disabled:opacity-90 transition-opacity duration-300"
          type={"reset"}
          onClick={()=>dispatch2({type:ADVANCED_SEARCH_ACTIONS.CLEAR_ALL_FILTERS })}
        >
          Clear
        </button>
      </div>

      {tagData.map((groupName, index) => {
        return (
          <Block
            title={groupName.name}
            isOpen={state[index]}
            onToggle={() => dispatch({ type: "toggle", index: index })}
            key={groupName.name}
          >
            <div className="flex flex-wrap -mx-1 overflow-hidden pl-6">
              {groupName.tags.map((tagInfo) => {
                return (
                  <AdvancedSearchFilterCheckbox
                    key={tagInfo._id}
                    tag={tagInfo}
                    dispatch={dispatch2}
                  />
                );
              })}
            </div>
          </Block>
        );
      })}
    </div>
  );
};

export default AdvancedSearchCollapse;

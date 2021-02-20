import React, { useEffect, useReducer } from "react";
import AdvancedSearchFilters from "../components/AdvancedSearchFilters/AdvancedSearchFilters";
import Navbar from "../components/Navbar/Navbar";
import characterAPI from "../utils/characterAPI";
import { useWindowSize } from "@react-hook/window-size";
import {
  usePositioner,
  useResizeObserver,
  useContainerPosition,
  MasonryScroller,
} from "masonic";

export const ADVANCED_SEARCH_ACTIONS = {
  ADD_TO_INCLUDES: "add-to-includes",
  REMOVE_FROM_INCLUDES: "remove-from-includes",
  ALL_CHARACTERS_READY: "all-characters-ready",
  CLEAR_ALL_FILTERS:"clear-all-filters",
};

const reducer = (filters, action) => {
  switch (action.type) {
    case ADVANCED_SEARCH_ACTIONS.ADD_TO_INCLUDES:
      const newFilter = filters.includeFilter;
      newFilter.push(action.payload.name);
      const newFilteredChara = filters.filteredChara.filter((chara) => {
        return chara.tags.includes(action.payload.name);
      });
      // console.log('newFilteredChara: ', newFilteredChara)
      return {
        ...filters,
        includeFilter: newFilter,
        filteredChara: newFilteredChara,
      };

    case ADVANCED_SEARCH_ACTIONS.REMOVE_FROM_INCLUDES:
      const tempFilter = filters.includeFilter;
      tempFilter.splice(tempFilter.indexOf(action.payload.name), 1);
      // console.log('tempFilter: ', tempFilter)
      const resetFiltered = filters.allCharacters.filter((character) => {
        return tempFilter.every((filt) => character.tags.includes(filt));
      });
      // console.log('resetFiltered: ', resetFiltered)
      return {
        ...filters,
        includeFilter: tempFilter,
        filteredChara: resetFiltered,
      };

    case ADVANCED_SEARCH_ACTIONS.ALL_CHARACTERS_READY:
      return {
        ...filters,
        allCharacters: action.payload.characters,
        filteredChara: action.payload.characters,
        isDataReady: true,
      };

    case ADVANCED_SEARCH_ACTIONS.CLEAR_ALL_FILTERS:
      const inputs = document.getElementsByTagName("input")
      // console.log("inputs", inputs)
      
      for(let input of inputs) {
        input.checked=false;
      }

      return {
        ...filters,
        includeFilter: [],
        filteredChara: filters.allCharacters,
      }
    default:
      return filters;
  }
};

const AdvancedSearch = () => {
  // const [allCharacters, setAllCharacters] = useState([]);

  const [filtered, dispatch] = useReducer(reducer, {
    includeFilter: [],
    allCharacters: [],
    filteredChara: [],
    isDataReady: false,
  });
  const containerRef = React.useRef(null);
  const [windowWidth, windowHeight] = useWindowSize();
  const { offset, width } = useContainerPosition(containerRef, [
    windowWidth,
    windowHeight,
  ]);

  useEffect(() => {
    getCharacterData();
  }, []);

  const positioner = usePositioner(
    { width, columnWidth: 210, columnGutter: 6 },
    [filtered.filteredChara]
  );

  const resizeObserver = useResizeObserver(positioner);

  const getCharacterData = async () => {
    const allCharactersData = await characterAPI.getAllCharactersWithTags();
    dispatch({
      type: ADVANCED_SEARCH_ACTIONS.ALL_CHARACTERS_READY,
      payload: { characters: allCharactersData },
    });
  };
  const characterCard = ({ index, data: { _id, name, tags } }) => (
    <div className=" items-center p-4 bg-white rounded-lg shadow-xs ">
      <div>
        <p className="mb-2 text-lg ">{name}</p>
        <ul className="text-sm text-gray-700 ">
          {tags.map((tag, index2) => {
            return (
              <li key={index2} className="">
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="mx-auto w-5/6 mt-6 mb-6">
        <AdvancedSearchFilters dispatch={dispatch} />
        <div>
          <MasonryScroller
            positioner={positioner}
            resizeObserver={resizeObserver}
            containerRef={containerRef}
            items={filtered.filteredChara}
            height={windowHeight}
            offset={offset}
            overscanBy={6}
            render={characterCard}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;

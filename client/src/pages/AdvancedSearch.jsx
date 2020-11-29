import React, { useEffect, useReducer } from "react";
import AdvancedSearchFilters from "../components/AdvancedSearchFilters/AdvancedSearchFilters";
import Navbar from "../components/Navbar/Navbar";
import characterAPI from "../utils/characterAPI";

export const ACTIONS = {
  ADD_TO_INCLUDES: "add-to-includes",
  REMOVE_FROM_INCLUDES: "remove-from-includes",
  ALL_CHARACTERS_READY: "all-characters-ready",
};

const reducer = (filters, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_INCLUDES:
      const newFilter = filters.includeFilter;
      newFilter.push(action.payload.name);
      const newFilteredChara = filters.filteredChara.filter(chara=>{
        return chara.tags.includes(action.payload.name)
      })
      // console.log('newFilteredChara: ', newFilteredChara)
      return { ...filters, includeFilter: newFilter, filteredChara: newFilteredChara };

    case ACTIONS.REMOVE_FROM_INCLUDES:
      const tempFilter = filters.includeFilter
      tempFilter.splice(tempFilter.indexOf(action.payload.name), 1)
      // console.log('tempFilter: ', tempFilter)
      const resetFiltered = filters.allCharacters.filter( character=>{
        return tempFilter.every(filt=> character.tags.includes(filt))
      })
      // console.log('resetFiltered: ', resetFiltered)
      return {...filters, includeFilter:tempFilter, filteredChara: resetFiltered};

    case ACTIONS.ALL_CHARACTERS_READY:
      return {
        ...filters,
        allCharacters: action.payload.characters,
        filteredChara: action.payload.characters,
        isDataReady: true,
      };

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
    isDataReady: false
  });

  useEffect(() => {
    getCharacterData();
  }, []);

  const getCharacterData = async () => {
    const allCharactersData = await characterAPI.getAllCharactersWithTags();
    dispatch({
      type: ACTIONS.ALL_CHARACTERS_READY,
      payload: { characters: allCharactersData },
    });
  };

  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="mx-auto w-5/6 mt-6 mb-6">
        <AdvancedSearchFilters dispatch={dispatch} />

        <div className="flex flex-wrap -mx-1 overflow-hidden">
        {filtered.isDataReady && filtered.filteredChara.map((character) => {
          return <div key={character._id} className="my-1 px-1 w-full overflow-hidden sm:w-1/2 lg:w-1/3">{character.name}</div>;
        })}
        </div>
        
      </div>
    </div>
  );
};

export default AdvancedSearch;

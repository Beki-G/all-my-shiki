/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import tagsAPI from "../../utils/tagsAPI";
import AdvancedSearchCollapse from "../AdvancedSearchCollapse/AdvancedSearchCollapse";

const AdvancedSearchFilters = ({ dispatch }) => {
  const [tagData, setTagData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState({ isReady: false });
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const groupsData = await tagsAPI.getTagGroups();
    const tags = await tagsAPI.getAllTags();
    const initialArr = groupsData.map(() => {
      return false;
    });
    const newTagArr = setTagArrData(tags, groupsData)

    setInitialState(initialArr);
    setTagData(newTagArr);
    setIsDataLoading({ isReady: true });
  };

  const setTagArrData =(tags, groupNames) =>{
    const newTagArr = groupNames.map(grName=>{
        const tempArr = tags.filter(tag=>{
            return tag.groups[0]===grName
        })
        return {name: grName, tags: tempArr}
    })
    return newTagArr
  }
  return (
    <div className="bg-middle-red rounded-lg">

      {isDataLoading.isReady && (
        <AdvancedSearchCollapse
          initialState={initialState}
          tagData={tagData}
          dispatch2={dispatch}
        />
      )}
    </div>
  );
};

export default AdvancedSearchFilters;

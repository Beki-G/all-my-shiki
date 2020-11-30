import React, { useEffect, useMemo, useState } from "react";
import tagsAPI from "../../utils/tagsAPI";
import Table from "../Table/Table";

const TraitsTableContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllTraits();
    return () => {
      setData([]);
    };
  }, []);

  const getAllTraits = async () => {
    const traits = await tagsAPI.getAllTags();
    // console.log("tags: ", traits)
    setData(traits);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Trait",
        accessor: "tag",
      },
      {
        Header: "Definition",
        accessor: "definition",
      },
    ],
    []
  );

  return (
    <div className="w-5/6 mx-auto mt-10">
      <div className="mx-auto bg-old-mauve text-white text-xl mb-2 rounded-md text-center p-2">
        Trait Definitions
        <p className="text-base opacity-80 my-2">
          Confused on what a trait can do or looking for a specific one? Tap/click on the headings to sort or use the search boxes. 
        </p>
      </div>
      <Table
        columns={columns}
        data={data}
        columnsHidden={[]}
        isShowFilter={true}
      />
    </div>
  );
};

export default TraitsTableContainer;

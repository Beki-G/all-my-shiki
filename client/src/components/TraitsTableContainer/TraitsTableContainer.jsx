import React, { useEffect, useMemo, useState } from 'react'
import tagsAPI from '../../utils/tagsAPI'
import Table from '../Table/Table'

const TraitsTableContainer = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        getAllTraits();
        return () => {
            setData([]);
          };
    },[])

    const getAllTraits = async () =>{
        const traits = await tagsAPI.getAllTags()
        console.log("tags: ", traits)
        setData(traits)
    }

    const columns = useMemo(()=>[
        {
            Header: "Trait", 
            accessor: "tag",
        }, 
        {
            Header: "Definition",
            accessor: "definition"
        }
    ], [])

    return (
        <div className="w-5/6 mx-auto mt-10">
            <Table 
                columns={columns}
                data={data}
                columnsHidden={[]}
            />
        </div>
    )
}

export default TraitsTableContainer

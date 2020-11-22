/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useEffect, useState } from 'react'

const TableColumnCheckbox = ({column, hideColumns, setHideColumns}) => {
    const [hidden, setHidden] = useState(false)

    useEffect(()=>{
        setHidden(Object.values(hideColumns).indexOf(column.accessor)>-1)
    }, [hideColumns])

    // console.log('column', column)

    const onChange = (e) =>{

        if(!e.target.checked){
            setHideColumns(hideColumns.filter((string) => string !== e.target.value))
            
        } else {
            const arr = [...hideColumns, e.target.value]
            // console.log(arr)
            setHideColumns(arr)
        }
        setHidden(!hidden)

    }


    return (
        <div className="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 lg:w-1/5">
            <input id={column.name} type="checkbox" checked={hidden} value={column.accessor} onChange={onChange}/>
            <label htmlFor={column.name}>{column.name}</label>
        </div>
    )
}

export default TableColumnCheckbox

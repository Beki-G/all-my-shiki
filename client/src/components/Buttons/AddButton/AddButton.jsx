import React from 'react'

const AddButton = ({type}) => {
    const onClick = (e) =>{
        e.preventDefault()
        console.log(type)
    }
    return (
        <button className=" rounded-full px-2 h-6 bg-purple-600 font-bold text-white " onClick={onClick}>
            +
        </button>
    )
}

export default AddButton

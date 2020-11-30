import React from 'react'

const AddFavoriteFromProfile = ({onClick}) => {
    return (
        <button className=" ml-2 sm:mt-6 uppercase mx-auto shadow bg-old-mauve hover:bg-cinnabar ring-cinnabar focus:ring focus:outline-none text-white text-xs py-3 px-10 rounded" onClick={onClick}>
            Favorite
        </button>
    )
}

export default AddFavoriteFromProfile

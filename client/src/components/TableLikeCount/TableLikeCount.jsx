/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import teamAPI from '../../utils/teamAPI'
import { UseUserSession } from "../../utils/UserContext";

const TableLikeCount = ({teamId}) => {
    // console.log("likesArr", teamId)

    const {userProfile} = UseUserSession()

    const [likeCount, setLikeCount] = useState({likes: 0})
    
    useEffect( ()=>{
        getCurrentLikes()
    }, [userProfile])

    const getCurrentLikes = async() => {
        let count = await teamAPI.getLikeCount(teamId)
        setLikeCount({likes: count})
    }


    return (
        <div>
            {likeCount.likes}
        </div>
    )
}

export default TableLikeCount

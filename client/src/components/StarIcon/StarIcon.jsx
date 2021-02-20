import React, { useEffect, useState } from "react";
import { UseUserSession, UpdateUserSession } from "../../utils/UserContext";
import teamAPI from "../../utils/teamAPI";

const StarIcon = ({ itemId, type, likesArr }) => {
  const { userProfile } = UseUserSession();
  const {updateUser} = UpdateUserSession()
  //likesArr has userId's that have liked the item
  //type is the type, Which api is called is dependant on that
  //itemid... is item id

  const [isLiked, setIsLiked] = useState({ liked: false });

  useEffect(() => {
    // console.log("useEffect Fired", likesArr);

    if (likesArr && userProfile._id) {
      likesArr.includes(userProfile._id)
        ? setIsLiked({ liked: true })
        : setIsLiked({ liked: false });
    }

  }, [likesArr, userProfile._id]);

  const onStar = async (e) =>{
    e.preventDefault()
    // console.log(e.target.id)
    // console.log('isLiked.liked', isLiked.liked)
    const itemType= e.target.getAttribute("data-itemtype")

    if(!userProfile._id) return;

    if(isLiked.liked){
        if(itemType === "team") {
          await teamAPI.removeLike(e.target.id, userProfile._id)
          setIsLiked({liked:false})

        }
    }else {
        if(itemType==="team"){
            await teamAPI.addLike(e.target.id, userProfile._id)
            setIsLiked({liked:true})

        }
        // console.log("this will be liked")
    }

    updateUser();

  }

  return (
    <div onClick={onStar} id={itemId} data-itemtype={type} className="text-xl">
      {isLiked.liked ? (
          String.fromCharCode(9733)
        // `&#9733;`
      ) : (
        String.fromCharCode(9734)
      )}
    </div>
  );
};

export default StarIcon;

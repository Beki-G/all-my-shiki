import React, { useState } from 'react'

const ScrollToTopBtn = () => {
    const [isShow, setIsShow] = useState({showScroll:"hidden"})

    window.onscroll= function() {onScroll()}

    const onScroll = (e) =>{
        (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
            ? setIsShow({showScroll: "block"}) 
            : setIsShow({showScroll: "hidden"})
    }

    const onClick = (e) =>{
        e.preventDefault();
        window.scrollTo({top:0, behavior:"smooth"})
    }


    return (
        <button className={`${isShow.showScroll} bottom-7 fixed right-8 rounded-md text-xl align-text-bottom bg-black text-white w-8 h-8 opacity-60 hover:opacity-100 focus:ring-2 outline-none`} onClick={onClick}>
            ^
        </button>
    )
}

export default ScrollToTopBtn

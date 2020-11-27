import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import TraitsTableContainer from '../components/TraitsTableContainer/TraitsTableContainer'

const Traits = () => {
    return (
        <div>
            <div className="bg-black">
                <Navbar/>
            </div>
            <TraitsTableContainer />
        </div>
    )
}

export default Traits

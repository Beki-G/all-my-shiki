import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import { ProfileUser } from '../components/ProfileUser/ProfileUser';

const Profile = () => {
    
    return (
        <div className="flex flex-col justify-end rounded bg-gray-50 font-sans">
            <div className="bg-black">
                <Navbar />
            </div>

            <div className="mt-8 mb-4 pb-6 pt-4 w-3/4 mx-auto m-0 bg-pink-200 rounded">
                <ProfileUser />
            </div>
        </div>
    )
}

export default Profile

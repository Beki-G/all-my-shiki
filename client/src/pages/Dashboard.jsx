import React from 'react'
import DashboardFavorites from '../components/DashboardFavorites/DashboardFavorites';
import DashboardModChara from '../components/DashboardModChara/DashboardModChara';
import DashboardTeamsTable from '../components/DashboardTeamsTable/DashboardTeamsTable';
import Navbar from '../components/Navbar/Navbar';

export const Dashboard = () => {
    return (
        <div className="flex flex-col justify-end rounded bg-gray-50 font-sans">
            <div className="bg-black">
                <Navbar />
            </div>
            <br />
            <DashboardFavorites />
            <br/>
            <DashboardModChara />
            <br />
            <DashboardTeamsTable />
        </div>
    )
}

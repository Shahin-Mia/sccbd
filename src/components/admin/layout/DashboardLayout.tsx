import React from "react"
import DashboradNavBar from "../navigation/DashboradNavBar"
import Sidebar from "../navigation/Sidebar"
import { Outlet } from "react-router-dom"

function DashboardLayout(): React.JSX.Element {
    return (
        <div>
            <DashboradNavBar />
            <div>
                <Sidebar />
                <div className="lg:ml-60 pt-2">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
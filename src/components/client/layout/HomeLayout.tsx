import { Outlet } from "react-router-dom"
import Navbar from "../header/Navbar"
import Footer from "../footer/Footer"

const HomeLayout = () => {
    return (
        <div>
            {/* <Header /> */}
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default HomeLayout
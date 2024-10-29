import { Outlet, useLoaderData } from "react-router-dom"
import Navbar from "../header/Navbar"
import Footer from "../footer/Footer"


interface Destination {
    id: number,
    destination_name: String,
    destination_thumbnail: String,
    destination_images: String,
    description: String,
    published: number,
    created_by: number,
    created_at: String,
    updated_at: String
}

const HomeLayout = () => {
    const destinations = useLoaderData() as Destination[];
    return (
        <div>
            {/* <Header /> */}
            <Navbar destinations={destinations} />
            <Outlet context={destinations} />
            <Footer />
        </div>
    )
}

export default HomeLayout
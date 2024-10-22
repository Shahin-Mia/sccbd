import SliderCard from "../../ui/SliderCard";
import { Destination } from "../../../../http/destinaitons";
import { Outlet, useLoaderData, useOutlet } from "react-router-dom";

// type Props = {}
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

const StudyDestination = () => {
    const destinations = useLoaderData() as Destination[];
    const outlet = useOutlet();
    console.log(destinations);
    return (
        <>
            {
                !outlet ? <div>
                    < div className="bg-primary text-center" >
                        <h1 className="text-5xl font-bold text-white p-20">Study Destination</h1>
                    </div >
                    <div className="bg-slate-100 py-16 px-10">
                        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-x-5 gap-y-10">
                            {
                                destinations.map((destination, index) => (
                                    <SliderCard key={index}
                                        destination={destination}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div > : <Outlet />
            }
        </>
    )
}

export default StudyDestination
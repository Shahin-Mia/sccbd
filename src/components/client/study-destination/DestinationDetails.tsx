import { useState } from "react";
import { useLoaderData } from "react-router-dom";

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

function DestinationDetails() {
    const destination = useLoaderData() as Destination;
    const images = destination.destination_images.split(",");
    const [selectedImage, setSelectedImage] = useState(images[0]);
    return (
        <div>
            <div
                className="hero min-h-[40vh]"
                style={{
                    backgroundImage: `url(/images/${destination.destination_thumbnail})`,
                    backgroundPosition: "bottom"
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Study in {destination.destination_name}</h1>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center mt-10">
                <div
                    dangerouslySetInnerHTML={{ __html: destination.description }}
                    className="flex-1 m-10 sm:mr-10 sm:mt-10"
                />
                <div>
                    <div className="flex flex-col items-center justify-center lg:sticky lg:top-32">
                        {/* Main Image */}
                        <div>
                            <img src={`/images/${selectedImage}`} alt="selected product" className="w-72 md:w-96 h-64" />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex mt-4">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={`/images/${image}`}
                                    alt={`Product ${index}`}
                                    onClick={() => setSelectedImage(image)}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        cursor: 'pointer',
                                        border: selectedImage === image ? '2px solid blue' : '1px solid gray',
                                        borderRadius: "2px",
                                        marginRight: '5px',
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationDetails
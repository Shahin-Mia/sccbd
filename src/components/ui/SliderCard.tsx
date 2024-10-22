const SliderCard = ({ destination }: any) => {
    return (
        <div className="card image-full shadow-xl">
            <figure>
                <img src={`/images/${destination.destination_thumbnail}`} alt="" />
                <figcaption className="absolute text-xl text-white z-10">{destination.destination_name}</figcaption>
            </figure>
            <div className="card-body opacity-0 hover:opacity-100 bg-white rounded-2xl">
                <h3 className="text-primary text-2xl font-bold mt-1 mb-3">
                    {destination.destination_name}
                </h3>
                <p className="text-sm">
                    {destination.description.replace(/<\/?[^>]+(>|$)/g, "")}
                </p>
                <div className="flex justify-center mt-5">
                    <a href={`/study-destination/${destination.destination_name}/${destination.id}`} className="text-xs bg-primary text-white px-4 py-1 inline-block rounded-full mt-2 text-center">See More</a>
                </div>
            </div>
        </div>
    )
}

export default SliderCard
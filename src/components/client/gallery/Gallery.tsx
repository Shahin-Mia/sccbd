import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { eventImages, partnerImages } from "../../../lib/data"
import ImageCarousel from "../../ui/ImageCarousel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// type Props = {}

function NextArrow(props: any) {
    const { className, onClick } = props;
    return (
        <FontAwesomeIcon
            icon={faAngleRight}
            onClick={onClick}
            className={className}
            style={{ color: "4D148C" }}
        />
    );
}

function PrevArrow(props: any) {
    const { className, onClick } = props;
    return (
        <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={onClick}
            className={className}
            style={{ color: "4D148C" }}
        />
    );
}

const Gallery = () => {

    const settings = {
        speed: 2000,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-bold p-20">Gallery</h1>
            </div>
            <div>
                <div className="mb-16">
                    <h2 className="text-center text-3xl md:text-4xl font-semibold underline mb-5">Our Events</h2>
                    <div className="w-4/5 md:container mx-auto">
                        <ImageCarousel images={eventImages} classes="w-96 h-32 md:h-60 px-2" setting={settings} />
                    </div>
                </div>
            </div>
            <div>
                <div className="mb-16">
                    <h2 className="text-center text-3xl md:text-4xl font-semibold underline mb-5">Our Partners</h2>
                    <div className="w-4/5 md:container mx-auto">
                        <ImageCarousel images={partnerImages} classes="w-96 h-32 md:h-60 px-2" setting={settings} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
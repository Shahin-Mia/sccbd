import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MessageBanner from "./MessageBanner";

type Props = {}

const MessageCarousel = (props: Props) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <MessageBanner />
            </Slider>
        </div>
    );
}

export default MessageCarousel
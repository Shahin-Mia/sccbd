import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Props = { images: { name: String, src: String }[], classes: string }

const ImageCarousel = ({ images, classes }: Props) => {

    const settings = {
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    images.map((image, index) => (
                        <div key={index} className={classes}>
                            <img src={`/images/${image.src}`} alt="" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default ImageCarousel
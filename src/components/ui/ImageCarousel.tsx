import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Props = { images: { alt: string, src: string }[], classes: string, setting: Object }

const ImageCarousel = ({ images, classes, setting }: Props) => {

    const settings = {
        ...setting,
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
                        <div key={index}>
                            <img src={`/images/${image.src}`} alt="" className={classes} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default ImageCarousel
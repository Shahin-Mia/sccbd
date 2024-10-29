import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";

const Carousel = ({ destinations }: { destinations: any }) => {
  return (
    <div className="px-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-x-5 gap-y-10">
        {
          destinations.map((destination: any, index: any) => (
            <SliderCard key={index}
              destination={destination}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Carousel
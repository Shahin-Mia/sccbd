import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";
import { Destination } from "../../../http/destinaitons";
import { useEffect, useState } from "react";

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

const Carousel = () => {
  const [destinations, setDestination] = useState<Destination[]>([]);
  const fetchData = async () => {
    const data = await Destination.getAll();
    if (data) {
      setDestination(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (

    <div className="px-10">
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
  );
}

export default Carousel
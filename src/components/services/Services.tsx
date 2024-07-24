import ContactForm from "../ui/ContactForm";
import useDocumentTitle from "../../lib/Helpers"
import SliderCard from "../ui/SliderCard";
import { serviceCards } from "../../lib/data";


const Services = () => {

    useDocumentTitle('Services');

    return (
        <div>
            <div className="bg-primary text-center">
                <h1 className="text-5xl font-bold text-white p-20">Our Services</h1>
            </div>
            <div className="bg-slate-100 py-16 px-10 grid grid-cols1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
                {
                    serviceCards.map((card, index) => (
                        <SliderCard
                            title={card.title}
                            img={card.img}
                            desc={card.desc}
                            cardType={card.cardType}
                        />
                    ))
                }
            </div>
            <div className="bg-primary bg-opacity-80">
                <div className="w-4/5 md:w-3/4 mx-auto py-10 text-white">
                    <div className="mb-5">
                        <h3 className="text-center text-3xl font-semibold">Please feel free provide feedback</h3>
                    </div>
                    <ContactForm classes="text-white" />
                </div>
            </div>
        </div>
    )
}

export default Services
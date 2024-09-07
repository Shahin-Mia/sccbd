import useDocumentTitle from "../../../lib/Helpers";
import SliderCard from "../../ui/SliderCard";

// type Props = {}
type DestinationCard = { title: string, img: string, desc: string, cardType: string };

const StudyDestination = () => {
    useDocumentTitle('Study Destination');

    const destinationCards: Array<DestinationCard> = [
        {
            title: "Study in Australia",
            img: 'Study-in-Australia-1.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas nihil molestiae facilis explicabo accusamus? Aspernatur deleniti blanditiis, molestiae totam praesentium ipsum iste numquam tenetur cupiditate, consequuntur repellendus deserunt tempore!",
            cardType: "destination"
        },
        {
            title: "Study in Canada",
            img: 'Study-in-Canada-1-scaled.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas nihil molestiae facilis explicabo accusamus? Aspernatur deleniti blanditiis, molestiae totam praesentium ipsum iste numquam tenetur cupiditate, consequuntur repellendus deserunt tempore!",
            cardType: "destination"
        },
        {
            title: "Study in UK",
            img: 'Study-in-UK-1.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas nihil molestiae facilis explicabo accusamus? Aspernatur deleniti blanditiis, molestiae totam praesentium ipsum iste numquam tenetur cupiditate, consequuntur repellendus deserunt tempore!",
            cardType: "destination"
        },
        {
            title: "Study in USA",
            img: 'Study-in-USA-1.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas nihil molestiae facilis explicabo accusamus? Aspernatur deleniti blanditiis, molestiae totam praesentium ipsum iste numquam tenetur cupiditate, consequuntur repellendus deserunt tempore!",
            cardType: "destination"
        },
    ]
    return (
        <div>
            <div className="bg-primary text-center">
                <h1 className="text-5xl font-bold text-white p-20">Study Destination</h1>
            </div>
            <div className="bg-slate-100 py-16 px-10 grid grid-cols1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-x-5 gap-y-10">
                {
                    destinationCards.map((card, index) => (
                        <SliderCard key={index}
                            title={card.title}
                            img={card.img}
                            desc={card.desc}
                            cardType={card.cardType}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default StudyDestination
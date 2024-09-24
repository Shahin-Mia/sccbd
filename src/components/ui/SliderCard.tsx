import clsx from 'clsx';

type Props = { title: string, img: string, desc: string, cardType: string };

const SliderCard = ({ title, img, desc, cardType }: Props) => {
    return (
        <div className=" bg-white rounded-lg shadow px-3 pt-3 pb-6 mx-2">
            <div>
                <img src={`/images/${img}`} alt="" className="rounded-lg object-cover w-full h-60" />
            </div>
            <div>
                <h3 className={clsx(cardType === "destination" && "text-primary", "text-2xl", "font-bold", "mt-1", "mb-3")}>
                    {title}
                </h3>
                <p className="text-sm">
                    {desc}
                </p>
                {
                    cardType === 'destination' ?
                        <div className="flex justify-center mt-5">
                            <a href="#" className="text-xs bg-primary text-white px-4 py-1 inline-block rounded-full mt-2 text-center">See More</a>
                        </div> :
                        <button className="text-sm border border-stone-500 text-stone-500 px-2 hover:text-primary hover:border-primary">Show more</button>
                }
            </div>
        </div >
    )
}

export default SliderCard
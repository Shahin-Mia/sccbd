// type Props = {}

const MessageBanner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center p-16 text-white">
            <div>
                <h3 className="text-4xl font-bold">Message From The CEO</h3>
                <div className="border mt-1 border-slate-300"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus aut perspiciatis voluptas sed sit impedit exercitationem natus autem ipsam repellat, aspernatur recusandae tenetur. Delectus pariatur quae laborum nihil recusandae.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, error laboriosam totam ea sequi laudantium praesentium sit nulla repellat maxime, beatae expedita at! Voluptas, est nostrum minus in fuga harum.</p>
            </div>
            <div className="max-w-80 relative border-8 border-slate-200">
                <img src="/images/CEO-Picture-1.jpg" alt="" />
                <div className="absolute bottom-0 left-0 right-0 py-4 bg-primary opacity-50">
                    <h4 className="text-xl font-bold text-center">Kaniz Fatima Mitu</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageBanner
// type Props = {}

const MessageBanner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center p-16 text-white content-center">
            <div>
                <h3 className="text-3xl md:text-4xl font-bold">Message From The CEO</h3>
                <div className="border mt-1 border-slate-300"></div>
                <p>
                    The main idea behind Student Career Consultancy is a school of thought that I learned from my dad Mr. Abu Maeem Zakaria Arshad to motivate to youth for the best education that can light their values globally. I would like to take this opportunity to thank you to all my stakeholders i.e. partners, students, and partners trusting us to be part of your education endeavors. We assure you the right path for your journey connected with your further study to your professional career. We trust only on our client’s satisfaction and their vertical and horizontal growth which is more important than anything else for our sustainability.
                    <br />
                    Being an education consultant, it is our responsibility to provide you the best counseling and guidance for your further study and advance your career. We always feel pride to maintain ethical Counseling and here to enable student to achieve foreign qualification.
                    <br />
                    I would like to invite you for your new success story.
                    <br />
                    Kanij Fatema Mitu
                    <br />
                    Chief Executive Officer
                </p>
            </div>
            <div className="max-w-72 md:max-w-80 relative border-8 border-slate-200 h-fit">
                <img src="/images/CEO-Picture-1.jpg" alt="" />
                <div className="absolute bottom-0 left-0 right-0 py-4 bg-primary opacity-50">
                    <h4 className="text-xl font-bold text-center">Kaniz Fatima Mitu</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageBanner
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import Card from '../ui/Card';
import Carousel from '../ui/Carousel';

type Props = {}

function Home({ }: Props) {
    return (
        <main>
            <section className='bg-main-banner bg-cover bg-center h-screen'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 content-center h-full'>
                    <div>
                        <h2 className='text-primary text-6xl font-bold mb-10'>Explore overseas study options...</h2>
                        <h3 className='text-xl font-semibold mb-5'><FontAwesomeIcon icon={faSquareCheck} className='text-primary' /> Countless option to make your future brighter</h3>
                        <p className='text-lg mb-8'>Student Career Consultancy helps you to choose dream study destination by providing premium education consultancy services.</p>
                        <a href='#' className='bg-primary text-white text-2xl px-3 py-2 rounded-md'>Apply Now</a>
                    </div>
                </div>
            </section>
            <section className="container mx-auto">
                <div className='mt-10'>
                    <h3 className='text-4xl font-bold text-primary'>Our mission and vision</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-10 mt-5'>
                    <Card
                        title="Our mission"
                        description="Our primary objective is to enable students from across the globe to access top-notch educational opportunities and services. Simultaneously, we aim to offer our partners and clients a transparent, dependable, and…"
                    />
                    <Card
                        title="Our vision"
                        description="As the foremost agency for recruiting international students in the Asia Pacific region, we are renowned for our dedication to a student-focused approach, unwavering integrity, and outstanding service delivery…"
                    />
                </div>
            </section>
            <section>
                <div className="container mx-auto">
                    <div className='mt-10'>
                        <h3 className='text-4xl font-bold text-primary text-center'>Our Destination</h3>
                    </div>
                    <div>
                        <Carousel />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
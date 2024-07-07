import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import Card from '../ui/Card';

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
                    <h3 className='text-4xl font-semibold text-primary'>Our mission and vision</h3>
                </div>
            </section>
        </main>
    )
}

export default Home
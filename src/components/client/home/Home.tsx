import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import Card from '../../ui/Card';
import Carousel from '../../ui/Carousel';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import MessageCarousel from '../../ui/MessageCarousel';
import ImageCarousel from '../../ui/ImageCarousel';
import { Link } from 'react-router-dom';

type Props = {}

function Home({ }: Props) {

    const settings = {
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        pauseOnHover: true,
    }

    const partnerLogo: { alt: string, src: string }[] = [
        {
            src: "australian-international-institute-of-higher-education.png",
            alt: "australian-university",
        },
        {
            src: "capilano-university.png",
            alt: "capilano-university",
        },
        {
            src: "Kingston-Logo.png",
            alt: "Kingston University",
        },
        {
            src: "lincoln-institute-of-higher-education.jpg",
            alt: "Lincoln Institute",
        },
        {
            src: "national-academy-of-professional-studies-logo.png",
            alt: "National Academy of Professional",
        },
    ];

    const eventImages: { name: string, src: string }[] = [
        {
            name: "Event-one",
            src: "1.png",
        },
        {
            name: "Event-two",
            src: "2.png",
        },
        {
            name: "Event-three",
            src: "3.png",
        }
    ]

    return (
        <main>
            <section className='bg-main-banner bg-cover bg-center h-screen'>
                <div className='container overflow-hidden mx-auto grid grid-cols-1 md:grid-cols-2 content-center h-full'>
                    <div className='px-5 md:px-0'>
                        <h2 className='text-primary text-4xl md:text-6xl font-bold mb-10'>Explore overseas study options...</h2>
                        <h3 className='text-lg md:text-xl font-semibold mb-5'><FontAwesomeIcon icon={faSquareCheck} className='text-primary' /> Countless option to make your future brighter</h3>
                        <p className='text-base md:text-lg mb-8'>Student Career Consultancy helps you to choose dream study destination by providing premium education consultancy services.</p>
                        <Link to='/application-page' className='bg-primary text-white text-lg md:text-2xl px-3 py-2 rounded-md'>Apply Now</Link>
                    </div>
                </div>
            </section>
            <section className="container overflow-hidden mx-auto px-5 md:px-0">
                <div className='mt-10'>
                    <h3 className='text-3xl md:text-4xl font-bold text-primary'>Our mission and vision</h3>
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
            <section className='bg-primary h-screen py-10 mt-10'>
                <div className="container overflow-hidden mx-auto">
                    <div>
                        <h3 className='text-3xl md:text-4xl font-bold text-white text-center'>Our Destination</h3>
                    </div>
                    <div className='mt-10'>
                        <Carousel />
                    </div>
                </div>
            </section>
            <section>
                <div className='container overflow-hidden mx-auto mt-10 px-5 md:px-0'>
                    <div>
                        <h2 className='text-3xl md:text-4xl font-bold mb-2'>Our Services</h2>
                        <h3 className='text-xl md:text-2xl mb-2'>SCC provides quality counseling to our students</h3>
                    </div>
                    <div className='flex items-center justify-between sm:mx-14 flex-wrap'>
                        <div>
                            <Disclosure as="div" className="px-6 mb-1">
                                <DisclosureButton className="group flex w-full items-center">
                                    <ChevronDownIcon className="size-5 mr-2 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                                    <span className="text-xl">
                                        Course Selection
                                    </span>
                                </DisclosureButton>
                                <DisclosurePanel
                                    transition
                                    className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 px-10">
                                    <ol className='list-decimal'>
                                        <li>Diploma</li>
                                        <li>Bachelor</li>
                                        <li>MBBS</li>
                                        <li>Masters</li>
                                    </ol>
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="px-6 mb-1">
                                <DisclosureButton className="group flex w-full items-center">
                                    <ChevronDownIcon className="size-5 mr-2 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                                    <span className="text-xl">
                                        Admission services
                                    </span>
                                </DisclosureButton>
                                <DisclosurePanel
                                    transition
                                    className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 px-10">
                                    <p>
                                        We support students throughout the admission procedure by furnishing details concerning entry prerequisites, cutoff dates, and protocols for various global universities and
                                        colleges. Our assistance extends to aiding students in organizing and presenting their application materials, encompassing academic records, essays, letters of recommendation, and examination scores.
                                    </p>
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="px-6 mb-1">
                                <DisclosureButton className="group flex w-full items-center">
                                    <ChevronDownIcon className="size-5 mr-2 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                                    <span className="text-xl">
                                        Application services
                                    </span>
                                </DisclosureButton>
                                <DisclosurePanel
                                    transition
                                    className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 px-10">
                                    <p>Student Career Consultancy aids students in navigate through the intricate visa and immigration procedures by furnishing current data about visa prerequisites, aiding in the procedure of visa application, and extending assistance for other matters related to immigration.</p>
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="px-6 mb-1">
                                <DisclosureButton className="group flex w-full items-center">
                                    <ChevronDownIcon className="size-5 mr-2 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                                    <span className="text-xl">
                                        Pre-departure
                                    </span>
                                </DisclosureButton>
                                <DisclosurePanel
                                    transition
                                    className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 px-10">
                                    <p>
                                        Student Career Consultancy offers pre-departure services designed to assist students in getting ready for their journey, which involve coordinating airport receptions, presenting choices for lodging and transportation, and furnishing advice about cultural distinctions and societal standards. Furthermore, we extend post-arrival provisions, encompassing initiation programs and continuous assistance to facilitate students in acclimating to their fresh academic and cultural environment.
                                    </p>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                        <div className='relative'>
                            <div className='w-80'>
                                <img src="/images/SCC-Study-destination-scaled.jpg" alt="" />
                            </div>
                            <h3 className='absolute -bottom-3 right-0 bg-primary text-white text-2xl px-4 py-1'>Study Destination</h3>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                        <div className="max-w-96 bg-white p-3 mx-2">
                            <div className='max-w-16'>
                                <img src="/images/Academic-counselling.png" alt="" className="rounded-lg" />
                            </div>
                            <div>
                                <h3 className="text-primary text-xl font-semibold mt-1 mb-3">Academic Counseling</h3>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas nihil molestiae facilis explicabo accusamus? Aspernatur deleniti blanditiis, molestiae totam praesentium ipsum iste numquam tenetur cupiditate, consequuntur repellendus deserunt tempore!</p>
                            </div>
                        </div>
                        <div className="max-w-96 bg-white p-3 mx-2">
                            <div className='max-w-16'>
                                <img src="/images/Securing-admission.png" alt="" className="rounded-lg" />
                            </div>
                            <div>
                                <h3 className="text-primary text-xl font-semibold mt-1 mb-3">
                                    Securing Admission
                                </h3>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas nihil molestiae facilis explicabo accusamus? Aspernatur deleniti blanditiis, molestiae totam praesentium ipsum iste numquam tenetur cupiditate, consequuntur repellendus deserunt tempore!</p>
                            </div>
                        </div>
                        <div className="max-w-96 bg-white p-3 mx-2">
                            <div className='max-w-16'>
                                <img src="/images/Visa-guidance.png" alt="" className="rounded-lg" />
                            </div>
                            <div>
                                <h3 className="text-primary text-xl font-semibold mt-1 mb-3">
                                    Visa Guidance
                                </h3>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas nihil molestiae facilis explicabo accusamus? Aspernatur deleniti blanditiis, molestiae totam praesentium ipsum iste numquam tenetur cupiditate, consequuntur repellendus deserunt tempore!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-primary'>
                <div className='container overflow-hidden mx-auto'>
                    <MessageCarousel />
                </div>
            </section>

            <section className='container overflow-hidden mx-auto pt-10 text-center'>
                <Link to="/our-team" className='btn btn-lg bg-primary text-white text-xl md:text-2xl font-semibold rounded-xl px-4 py-1 hover:bg-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>OUR TEAM</Link>
            </section>


            <section className='container overflow-hidden mx-auto mt-10'>
                <div className='text-center'>
                    <h2 className='text-3xl md:text-4xl border-2 border-primary inline-block px-10 py-2 text-primary'>Our Partners</h2>
                </div>
                <div className='mt-10'>
                    <ImageCarousel images={partnerLogo} classes="max-w-40" setting={settings} />
                </div>
            </section>

            <section className="container overflow-hidden mx-auto my-10">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl border-b-2 border-primary inline-block px-10 py-2 text-primary">Our Upcoming Events</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-10'>
                    {
                        eventImages.map((image, index) => (
                            <div key={index} className='mb-5'>
                                <img src={`/images/${image.src}`} alt={image.name} />
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

export default Home
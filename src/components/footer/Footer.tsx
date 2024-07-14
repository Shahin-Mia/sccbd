import { faCheckCircle, faCopyright } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {}

const Footer = (props: Props) => {
    const date = new Date();

    return (
        <footer className="bg-stone-100 mt-10 py-5">
            <div className="container mx-auto mb-5">
                <div className="flex justify-between">
                    <div>
                        <div className="max-w-96">
                            <img src="/images/logo.png" alt="studentcareerconsaltancy" />
                        </div>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14604.37934634011!2d90.392919!3d23.779637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6c4d22d0d5b78f%3A0xcf9ce41951deeeb4!2sStudent%20Career%20Consultancy!5e0!3m2!1sen!2sbd!4v1720959885800!5m2!1sen!2sbd" width="500" height="250" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4 className="text-xl font-bold mb-5">Follow Us</h4>
                            <ul>
                                <li className="mb-5"><a href="#">Facebook</a></li>
                                <li className="mb-5"><a href="#">Instagram</a></li>
                                <li className="mb-5"><a href="#">Youtube</a></li>
                                <li className="mb-5"><a href="#">LinkedIn</a></li>
                                <li className="mb-5"><a href="#">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4 className="text-xl font-bold mb-5">Our Services</h4>
                            <ul>
                                <li className="mb-5"><a href="#">Course Selection</a></li>
                                <li className="mb-5"><a href="#">Admission Service</a></li>
                                <li className="mb-5"><a href="#">Visa application service</a></li>
                                <li className="mb-5"><a href="#">Pre-deperture guides</a></li>
                                <li className="mb-5"><a href="#"><FontAwesomeIcon icon={faCheckCircle} /> info@studentcareerconsultancy.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container mx-auto">
                <p className="text-lg py-5"><FontAwesomeIcon icon={faCopyright} /> {date.getFullYear()} Student Career Consultancy</p>
            </div>
        </footer>
    )
}

export default Footer
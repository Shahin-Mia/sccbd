type Props = { classes: string }

const ContactForm = ({ classes }: Props) => {
    return (
        <div>
            <form action="">
                <div className="space-y-12">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className={`${classes} block text-sm font-medium leading-6 text-gray-900`}>
                                First name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className={`${classes} block text-sm font-medium leading-6 text-gray-900`}>
                                Last name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="contact-no" className={`${classes} block text-sm font-medium leading-6 text-gray-900`}>
                                Contact no
                            </label>
                            <div className="mt-1">
                                <input
                                    id="contact-no"
                                    name="contactNo"
                                    type="number"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="email" className={`${classes} block text-sm font-medium leading-6 text-gray-900`}>
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-6">
                            <label htmlFor="subject" className={`${classes} block text-sm font-medium leading-6 text-gray-900`}>
                                Subject
                            </label>
                            <div className="mt-1">
                                <input
                                    id="subject"
                                    name="subject"
                                    type="subject"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-6">
                            <label htmlFor="message" className={`${classes} block text-sm font-medium leading-6 text-gray-900`}>
                                Message
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="message"
                                    name="message"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-6 mx-auto">
                            <button type="submit" className="bg-primary text-lg py-1 px-6 rounded-lg text-white">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
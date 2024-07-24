// type Props = { classes: string }

const ApplicationForm = () => {
    return (
        <div>
            <form action="">
                <div className="space-y-12">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className={`block text-sm font-medium leading-6 text-gray-900`}>
                                Name <span>*</span>
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="father-name" className={`block text-sm font-medium leading-6 text-gray-900`}>
                                Father's Name <span>*</span>
                            </label>
                            <div className="mt-1">
                                <input
                                    id="father-name"
                                    name="father-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="contact-no" className={`block text-sm font-medium leading-6 text-gray-900`}>
                                Contact no <span>*</span>
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
                            <label htmlFor="address" className={`block text-sm font-medium leading-6 text-gray-900`}>
                                Present Address <span>*</span>
                            </label>
                            <div className="mt-1">
                                <input
                                    id="=address"
                                    name="=address"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <fieldset className="mb-4">
                                <legend className="text-sm font-semibold leading-6 text-gray-900">Education Level <span>*</span></legend>
                                <div className="flex">
                                    <div className="flex items-center gap-x-1 mr-2">
                                        <input
                                            id="hsc"
                                            name="education-level"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="hsc" className="block text-sm font-medium leading-6 text-gray-900">
                                            HSC
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-1 mr-2">
                                        <input
                                            id="diploma"
                                            name="education-level"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="diploma" className="block text-sm font-medium leading-6 text-gray-900">
                                            Diploma
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-1 mr-2">
                                        <input
                                            id="bachelor"
                                            name="education-level"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="bachelor" className="block text-sm font-medium leading-6 text-gray-900">
                                            Bachelor's
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-1 mr-2">
                                        <input
                                            id="master"
                                            name="education-level"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="master" className="block text-sm font-medium leading-6 text-gray-900">
                                            Master's
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mb-4">
                                <legend className="text-sm font-semibold leading-6 text-gray-900">IELTS or any Language Proficiency Test <span>*</span></legend>
                                <div className="flex">
                                    <div className="flex items-center gap-x-1 mr-2">
                                        <input
                                            id="yes"
                                            name="language-proficiency"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="yes" className="block text-sm font-medium leading-6 text-gray-900">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-1 mr-2">
                                        <input
                                            id="no"
                                            name="language-proficiency"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="no" className="block text-sm font-medium leading-6 text-gray-900">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <div>
                                <label htmlFor="itels-score" className={`block text-sm font-medium leading-6 text-gray-900`}>
                                    IELTS or any Language Proficiency Test Score
                                    <br />
                                    (Mention the Test Name also)
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="itels-score"
                                        name="itels-score"
                                        type="number"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <fieldset className="sm:col-span-3">
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Preferred Country</legend>
                            <div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="australia"
                                        name="country"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="australia" className="block text-sm font-medium leading-6 text-gray-900">
                                        Australia
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="canada"
                                        name="country"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="canada" className="block text-sm font-medium leading-6 text-gray-900">
                                        Canada
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="uk"
                                        name="country"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="uk" className="block text-sm font-medium leading-6 text-gray-900">
                                        UK
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="usa"
                                        name="country"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="usa" className="block text-sm font-medium leading-6 text-gray-900">
                                        USA
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="malaysia"
                                        name="country"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="malaysia" className="block text-sm font-medium leading-6 text-gray-900">
                                        Malaysia
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="europe"
                                        name="country"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="europe" className="block text-sm font-medium leading-6 text-gray-900">
                                        Europe
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="china"
                                        name="country"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="china" className="block text-sm font-medium leading-6 text-gray-900">
                                        China
                                    </label>
                                </div>
                            </div>
                        </fieldset>

                        <div className="sm:col-span-6 mx-auto mt-10">
                            <button type="submit" className="bg-primary text-lg py-1 px-6 rounded-lg text-white">Submit</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default ApplicationForm
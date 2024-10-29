import { ErrorMessage, Field, Form, Formik } from "formik";

const HelpForm = ({ destinations }: any) => {

    const handleSubmit = (values: any, { }: any) => {
        setTimeout(async () => {
            values.phone = values.dial_code + values.phone;
            values.username = `${values.first_name} ${values.last_name}`;
            // const data = await User.createStudent(values);
            // console.log(data);
            // if (data.hasOwnProperty("status") && data.status === "success") {
            //     setSubmitting(false);
            //     resetForm();
            //     navigate('/greeting', {
            //         state: { message: data.message }  // Pass the message as state
            //     });
            //     localStorage.setItem("isSignedUp", "true");
            // } else {
            //     setMessage(data);
            // }
        }, 400);
    }
    return (
        <div>
            <Formik
                initialValues={
                    {
                        first_name: "",
                        last_name: "",
                        dial_code: "+880",
                        phone: "",
                        email: "",
                        password: "",
                        confirm_password: "",
                    }
                }
                onSubmit={handleSubmit}
            >{() => (
                <Form>
                    <div>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className='grid grid-cols-1 mb-2'>
                                    <label htmlFor="first_name" className='font-semibold'>First Name</label>
                                    <div className='form-control'>
                                        <Field type="text" name="first_name" id="first_name" className='input input-bordered focus:outline-none focus:border-primary' required />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 mb-2'>
                                    <label htmlFor="last_name" className='font-semibold'>Last Name</label>
                                    <div className='form-control'>
                                        <Field type="text" name="last_name" id="last_name" className='input input-bordered focus:outline-none focus:border-primary' />
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 mb-2'>
                                <label htmlFor="email" className='font-semibold'>Email</label>
                                <div className='form-control'>
                                    <Field type="email" name="email" id="email" className='input input-bordered focus:outline-none focus:border-primary' />
                                </div>
                            </div>
                            <div className='grid grid-cols-6 mb-2'>
                                <div className="col-span-2 lg:col-span-1">
                                    <label htmlFor="dial_code" className='font-semibold'>Dial Code</label>
                                    <div className='form-control'>
                                        <Field type="text" name="dial_code" id="dial_code" className='input input-bordered focus:outline-none focus:border-primary' readOnly />
                                        <ErrorMessage name="dial_code" className='text-xs' />
                                    </div>
                                </div>
                                <div className="col-span-4 lg:col-span-5 ml-2">
                                    <label htmlFor="phone" className='font-semibold'>Mobile number</label>
                                    <div className='form-control'>
                                        <Field type="number" name="phone" id="phone" className='input input-bordered focus:outline-none focus:border-primary' />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className='grid grid-cols-1 mb-2'>
                                    <label htmlFor="destination" className='font-semibold'>Your preferred Study Destination</label>
                                    <div className='form-control'>
                                        <Field as="select" id="destination" name="destination" className="select select-bordered focus:outline-none focus:border-primary">
                                            <option value="">Select</option>
                                            {
                                                destinations.map((dest: any) => (
                                                    <option key={dest.id} value={dest.destination_name}>{dest.destination_name}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 mb-2'>
                                    <label htmlFor="counselling_mode" className='font-semibold'>Preferred mode of Counselling</label>
                                    <div className='form-control'>
                                        <Field as="select" id="counselling_mode" name="counselling_mode" className="select select-bordered focus:outline-none focus:border-primary">
                                            <option value="">Select</option>
                                            <option value="in-person">In-person</option>
                                            <option value="virtual">Virtual Counselling</option>
                                        </Field>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className='grid grid-cols-1 mb-2'>
                                    <label htmlFor="fund" className='font-semibold'>Your preferred Study Destination</label>
                                    <div className='form-control'>
                                        <Field as="select" id="fund" name="fund" className="select select-bordered focus:outline-none focus:border-primary">
                                            <option value="">Select</option>
                                            <option value="self-funded">Self-Funded</option>
                                            <option value="parents">Parents</option>
                                            <option value="seeking-scholarship">Seeking Scholarship</option>
                                            <option value="seeking-government-scholarship">Seeking Government Scholarship</option>
                                            <option value="have-government-scholarship">Have Government Scholarship</option>
                                            <option value="bank-loan">Bank Loan</option>
                                            <option value="other">Other</option>
                                            <option value="employer-scholarship">Employer Scholarship</option>
                                        </Field>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 mb-2'>
                                    <label htmlFor="study_level" className='font-semibold'>Preferred Study Level</label>
                                    <div className='form-control'>
                                        <Field as="select" id="study_level" name="study_level" className="select select-bordered focus:outline-none focus:border-primary">
                                            <option value="">Select</option>
                                            <option value="school">School</option>
                                            <option value="undergraduate">Undergraduate</option>
                                            <option value="postgraduate">Postgraduate</option>
                                            <option value="doctorate">Doctorate</option>
                                            <option value="vocational">vocational</option>
                                        </Field>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-6 mx-auto mt-10">
                                <button type="submit" className="bg-primary text-lg py-1 px-6 text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default HelpForm
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { User } from '../../../../http/users';
import { useState } from 'react';

const EmailForm = (): React.JSX.Element => {
    const [message, setMessage] = useState("");
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Email is required')
    });

    const handleSubmit = (values: any, { setSubmitting }: any) => {
        setTimeout(async () => {
            const data = await User.sendEmail(values);
            if (data.hasOwnProperty("status") && data.status === "success") {
                setSubmitting(false);
                setMessage(data.message);
            }
        }, 400);
    }


    return (
        <div className="hero bg-primary bg-opacity-10 py-8">
            <div className="hero-content">
                <Formik
                    initialValues={
                        {
                            email: ""
                        }
                    }

                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >{({ isSubmitting }) => (
                    <Form>
                        <div className="card bg-slate-100 w-full max-w-lg shadow-2xl">
                            <div className="card-body w-96 md:w-[30rem]">
                                <div className="card-title flex-col mb-10">
                                    <p className="text-base font-normal text-slate-800">Please Enter your email address</p>
                                    <p className="text-base font-normal text-slate-800">{message}</p>
                                </div>
                                <div className='grid grid-cols-1 mb-2'>
                                    <label htmlFor="email" className='font-semibold'>Email</label>
                                    <div className='form-control'>
                                        <Field type="email" name="email" id="email" className='input input-bordered focus:outline-none focus:border-primary' onFocus={() => setMessage("")} />
                                        <ErrorMessage name="email" className='text-xs' />
                                    </div>
                                </div>
                                <div className="form-control mt-6 mb-2">
                                    <button className="btn bg-primary rounded-full text-white hover:bg-primary hover:text-white" disabled={isSubmitting}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    )
}

export default EmailForm
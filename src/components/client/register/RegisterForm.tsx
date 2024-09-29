import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { User } from "../../../../http/users";

const RegisterForm = () => {
    const [show, setShow] = useState<{ password: boolean, confirm: boolean }>({ password: false, confirm: false });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('First name is required'),
        last_name: Yup.string().required('Last name is required'),
        phone: Yup.number().required('Mobile number is required').test("Digit", "Invalid number", (value) => {
            return value ? value.toString().length === 10 : false;
        }),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is required'),
    });


    const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
        setTimeout(async () => {
            values.phone = values.dial_code + values.phone;
            values.username = `${values.first_name} ${values.last_name}`;
            const data = await User.createStudent(values);
            console.log(data);
            if (data.hasOwnProperty("status") && data.status === "success") {
                setSubmitting(false);
                resetForm();
                navigate('/greeting', {
                    state: { message: data.message }  // Pass the message as state
                });
                localStorage.setItem("isSignedUp", "true");
            } else {
                setMessage(data);
            }
        }, 400);
    }
    return (
        <div className="hero bg-primary bg-opacity-10 py-8">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Create your SCC account</h1>
                    <p className="py-6">
                        One account for all your study abroad needs. Sign up today.
                    </p>
                    <p className="text-error">{message}</p>
                </div>
                <div className="w-[28rem] md:w-[30rem] lg:w-[40rem]">
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
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >{({ isSubmitting }) => (
                        <Form>
                            <div className="card bg-slate-100 w-full max-w-6xl shadow-2xl">
                                <div className="card-body">
                                    <div className='grid grid-cols-1 mb-2'>
                                        <label htmlFor="first_name" className='font-semibold'>First Name</label>
                                        <div className='form-control'>
                                            <Field type="text" name="first_name" id="first_name" className='input input-bordered focus:outline-none focus:border-primary' />
                                            <ErrorMessage name="first_name" className='text-xs' />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 mb-2'>
                                        <label htmlFor="last_name" className='font-semibold'>Last Name</label>
                                        <div className='form-control'>
                                            <Field type="text" name="last_name" id="last_name" className='input input-bordered focus:outline-none focus:border-primary' />
                                            <ErrorMessage name="last_name" className='text-xs' />
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
                                                <ErrorMessage name="phone" className='text-xs' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 mb-2'>
                                        <label htmlFor="email" className='font-semibold'>Email</label>
                                        <div className='form-control'>
                                            <Field type="email" name="email" id="email" className='input input-bordered focus:outline-none focus:border-primary' />
                                            <ErrorMessage name="email" className='text-xs' />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 mb-2'>
                                        <label htmlFor="password" className='font-semibold'>Create password</label>
                                        <div className='form-control'>
                                            <div className="input input-bordered flex items-center focus-within:outline-none focus-within:border-primary">
                                                <Field type={show.password ? "text" : "password"} name="password" id="password" className="grow" />
                                                <span className="cursor-pointer" onClick={() => setShow({ ...show, password: !show.password })}>{show.password ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</span>
                                            </div>
                                            <ErrorMessage name="password" className='text-xs' />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 mb-2'>
                                        <label htmlFor="confirm_password" className='font-semibold'>Confirm password</label>
                                        <div className='form-control'>
                                            <div className="input input-bordered flex items-center focus-within:outline-none focus-within:border-primary">
                                                <Field type={show.confirm ? "text" : "password"} name="confirm_password" id="confirm_password" className="grow" />
                                                <span
                                                    className="cursor-pointer"
                                                    onClick={() => setShow({ ...show, confirm: !show.confirm })}
                                                >
                                                    {show.confirm ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                                                </span>
                                            </div>
                                            <ErrorMessage name="confirm_password" className='text-xs' />
                                        </div>
                                    </div>

                                    <div className="form-control mt-6 mb-2">
                                        <button className="btn bg-primary rounded-full text-white hover:bg-primary hover:text-white" disabled={isSubmitting}>Register</button>
                                    </div>

                                    <p className="text-center font-semibold">Already have an account? <Link to="/login" className="text-primary">Sign in</Link></p>
                                </div>
                            </div>
                        </Form>
                    )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;
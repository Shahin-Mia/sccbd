import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';
import { User } from "../../../../http/users";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetForm = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState<{ password: boolean, confirm: boolean }>({ password: false, confirm: false });
    const [queryParams] = useSearchParams();
    const token = queryParams.get("token");

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleSubmit = (values: any, { setSubmitting }: any) => {
        setTimeout(async () => {
            values["token"] = token;
            const data = await User.resetPassword(values);
            if (data.hasOwnProperty("status") && data.status === "success") {
                setSubmitting(false);
                navigate("/login");
            }
        }, 400);
    }


    return (
        <div className="hero bg-primary bg-opacity-10 py-8">
            <div className="hero-content">
                <Formik
                    initialValues={
                        {
                            password: "",
                            confirm_password: "",
                        }
                    }
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >{({ isSubmitting }) => (
                    <Form>
                        <div className="card bg-slate-100 w-full max-w-lg shadow-2xl">
                            <div className="card-body w-96 md:w-[30rem]">
                                <div className="card-title flex-col mb-10">
                                    <p className="font-normal text-slate-800">Please reset your password</p>
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
                                <button className="btn bg-primary rounded-full text-white hover:bg-primary hover:text-white" disabled={isSubmitting}>Save</button>
                            </div>
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
        </div >
    )
}

export default ResetForm
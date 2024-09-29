import { useContext, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

const Login = () => {
    const userContext = useContext(UserContext);
    const [errorMsg, setErrorMsg] = useState("");

    const { login } = userContext;

    const [show, setShow] = useState<boolean>(false);
    const handleSubmit = (values: any, { setSubmitting }: any) => {
        setTimeout(async () => {
            const errorMsg = await login(values);
            setErrorMsg(errorMsg);
            setSubmitting(false);
        }, 400);
    }


    return (
        <div className="hero bg-primary bg-opacity-10 py-8">
            <div className="hero-content">
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                        }
                    }
                    onSubmit={handleSubmit}
                >{({ isSubmitting }) => (
                    <Form>
                        <div className="card bg-slate-100 w-full max-w-lg shadow-2xl">
                            <div className="card-body w-96 md:w-[30rem]">
                                <div className="card-title flex-col mb-10">
                                    <h2>Sign in</h2>
                                    <p className="text-sm font-normal text-slate-800">Welcome Back! Please Enter your details</p>
                                </div>
                                {errorMsg ?? <p className="text-error">{errorMsg}</p>}
                                <div className='grid grid-cols-1 mb-2'>
                                    <label htmlFor="email" className='font-semibold'>Email</label>
                                    <div className='form-control'>
                                        <Field type="email" name="email" id="email" className='input input-bordered focus:outline-none focus:border-primary' />
                                        <ErrorMessage name="email" className='text-xs' />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 mb-2'>
                                    <label htmlFor="password" className='font-semibold'>Password</label>
                                    <div className='form-control'>
                                        <div className="input input-bordered flex items-center focus-within:outline-none focus-within:border-primary">
                                            <Field type={show ? "text" : "password"} name="password" id="password" className="grow" />
                                            <span className="cursor-pointer" onClick={() => setShow(!show)}>{show ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</span>
                                        </div>
                                        <ErrorMessage name="password" className='text-xs' />
                                    </div>
                                </div>
                                <Link to="/forgot-password" className="text-right text-primary font-semibold">Forgot password!</Link>
                                <div className="form-control mt-6 mb-2">
                                    <button className="btn bg-primary rounded-full text-white hover:bg-primary hover:text-white" disabled={isSubmitting}>Login</button>
                                </div>
                                <p className="text-center font-semibold">Don't have an account? <Link to="/register" className="text-primary">Sign up</Link></p>
                            </div>
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    )
}

export default Login
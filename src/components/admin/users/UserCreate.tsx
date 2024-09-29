import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage, FieldProps } from 'formik';
import * as Yup from 'yup';
import { User } from '../../../../http/users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function UserCreate(): React.JSX.Element {
    const [message, setMessage] = useState("");
    const [show, setShow] = useState<{ password: boolean, confirm: boolean }>({ password: false, confirm: false });

    const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];

    const validationSchema = Yup.object().shape({
        user_name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        role: Yup.string().required('Role is required'),
        profile_image: Yup.mixed<File>()
            .required('A file is required')
            .test('fileFormat', 'Unsupported Format', (value: File | null) => {
                return value ? SUPPORTED_FORMATS.includes(value.type) : false;
            })
            .test('fileSize', 'File too large, must be less than 2MB', (value: File | null) => {
                return value ? value.size <= 2 * 1024 * 1024 : false;
            })
            .test('resolution', 'Image resolution should be at least 400x400', (value: File | null) => {
                if (!value) return false;
                return new Promise((resolve) => {
                    const img = new Image();
                    const objectUrl = URL.createObjectURL(value);
                    img.src = objectUrl;

                    img.onload = () => {
                        const isValid = img.width >= 400 && img.height >= 400;
                        URL.revokeObjectURL(objectUrl);
                        resolve(isValid);
                    };

                    img.onerror = () => resolve(false);
                });
            }),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const createUser = async (data: any) => {
        const formData = new FormData();
        formData.append("username", data.user_name);
        formData.append("email", data.email);
        formData.append("role", data.role);
        formData.append("profile_image", data.profile_image);
        formData.append("password", data.password);

        const msg = await User.createUser(formData);
        return msg;
    }

    const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
        setTimeout(async () => {
            const msg = await createUser(values);
            if (msg) {
                setMessage(msg);
                resetForm();
            };
            setSubmitting(false);
        }, 400);
    }
    return (
        <div>
            <Formik
                initialValues={
                    {
                        user_name: "",
                        email: "",
                        role: "",
                        profile_image: null,
                        password: "",
                        confirm_password: ""

                    }
                }
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="card card-bordered mx-5 sm:mx-auto sm:w-4/5 lg:w-3/4 mt-5 mb-10">
                        <div className="card-body">
                            <div className="card-title justify-center mb-10">
                                <h2>Create User</h2>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 mb-2'>
                                <label htmlFor="user_name" className='font-semibold'>Name</label>
                                <div className='form-control'>
                                    <Field type="text" name="user_name" id="user_name" className='input input-bordered focus:outline-none focus:border-primary' />
                                    <ErrorMessage name="user_name" className='text-xs' />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 mb-2'>
                                <label htmlFor="email" className='font-semibold'>Email</label>
                                <div className='form-control'>
                                    <Field type="email" name="email" id="email" className='input input-bordered focus:outline-none focus:border-primary' />
                                    <ErrorMessage name="email" className='text-xs' />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 mb-2'>
                                <label htmlFor="role" className='font-semibold'>Role</label>
                                <div className='form-control'>
                                    <Field as="select" id="role" name="role" className="select select-bordered focus:outline-none focus:border-primary">
                                        <option value="">Select role</option>
                                        <option value="admin">Admin</option>
                                        <option value="maintainer">Maintainer</option>
                                        <option value="viewer">Viewer</option>
                                    </Field>
                                    <ErrorMessage name="role" className='text-xs' />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 mb-2'>
                                <div>
                                    <label htmlFor="profile_image" className='font-semibold block'>Profile Image</label>
                                    <span className='inline-block text-xs text-slate-500'>Uploaded image should be in jpg, png, jpeg formats. <br /> width and height should be at least 400x400 px</span>
                                </div>
                                <div className='form-control'>
                                    <Field name="profile_image">
                                        {({ form, meta }: FieldProps) => (
                                            <div>
                                                <input
                                                    type="file"
                                                    name="profile_image"
                                                    id="profile_image"
                                                    className='file-input'
                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                        const file = event.currentTarget.files && event.currentTarget.files[0];
                                                        if (file) {
                                                            form.setFieldValue("profile_image", file);
                                                        }
                                                    }}
                                                />
                                                {meta.touched &&
                                                    meta.error && <div className="error">{meta.error}</div>}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 mb-2'>
                                <label htmlFor="password" className='font-semibold'>Create password</label>
                                <div className='form-control'>
                                    <div className="input input-bordered flex items-center focus-within:outline-none focus-within:border-primary">
                                        <Field type={show.password ? "text" : "password"} name="password" id="password" className="grow" />
                                        <span className="cursor-pointer" onClick={() => setShow({ ...show, password: !show.password })}>{show.password ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</span>
                                    </div>
                                    <ErrorMessage name="password" className='text-xs' />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 mb-2'>
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
                            <div className="card-actions">
                                <button type="submit" className='btn btn-neutral'>Save</button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div >
    )
}

export default UserCreate
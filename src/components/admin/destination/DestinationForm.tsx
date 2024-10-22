import React, { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, FieldProps } from 'formik';
import 'react-quill/dist/quill.snow.css';
import { Destination } from '../../../../http/destinaitons';
import { UserContext } from '../../context/UserProvider';
import clsx from 'clsx';


function DestinationForm({ destination, modalRef, fetchData }: any): React.JSX.Element {
    const userContext = useContext(UserContext);
    const { user } = userContext;
    const [message, setMessage] = useState("");
    const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];

    let validationSchema: any = Yup.object().shape({
        destination_name: Yup.string().required('Name is required'),
        destination_thumbnail: Yup.mixed<File>()
            .required('A file is required')
            .test('fileFormat', 'Unsupported Format', (value: File | null) => {
                return value ? SUPPORTED_FORMATS.includes(value.type) : false;
            })
            .test('fileSize', 'File too large, must be less than 2MB', (value: File | null) => {
                return value ? value.size <= 2 * 1024 * 1024 : false;
            })
            .test('resolution', 'Image resolution should be at least 600x600', (value: File | null) => {
                if (!value) return false;
                return new Promise((resolve) => {
                    const img = new Image();
                    const objectUrl = URL.createObjectURL(value);
                    img.src = objectUrl;

                    img.onload = () => {
                        const isValid = img.width >= 600 && img.height >= 600;
                        URL.revokeObjectURL(objectUrl);
                        resolve(isValid);
                    };

                    img.onerror = () => resolve(false);
                });
            }),
        destination_images: Yup.mixed<File[]>()
            .required('A file is required')
            .test('fileFormat', 'Unsupported Format', (values: File[]) => {
                return values.length > 0 ? values.every((value: any) => SUPPORTED_FORMATS.includes(value.type)) : false;
            })
            .test('fileSize', 'File too large, must be less than 2MB', (values: any) => {
                return values.length > 0 ? values.every((value: any) => value.size <= 2 * 1024 * 1024) : false;
            })
            .test('resolution', 'Image resolution should be at least 600x600', (values: any) => {
                if (!values) return false;
                const promises = values.map((value: any) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        const objectUrl = URL.createObjectURL(value);
                        img.src = objectUrl;

                        img.onload = () => {
                            const isValid = img.width >= 600 && img.height >= 600;
                            URL.revokeObjectURL(objectUrl);
                            resolve(isValid);
                        };

                        img.onerror = () => {
                            URL.revokeObjectURL(objectUrl);
                            resolve(false);
                        };
                    });
                });

                return Promise.all(promises).then(results => {
                    return results.every(result => result === true);
                });
            }),
        description: Yup.string()
            .required('Description is required'),
    });

    if (destination) {
        validationSchema = Yup.object().shape({
            destination_name: Yup.string().required('Name is required'),
            description: Yup.string()
                .required('Description is required'),
        })
    }
    const destinationData = async (values: any) => {
        const formData = new FormData();

        formData.append('destination_name', values.destination_name);
        formData.append('description', values.description);
        formData.append('published', values.published);

        if (values.destination_thumbnail) {
            formData.append('destination_thumbnail', values.destination_thumbnail);
        }

        if (values.destination_images) {
            values.destination_images.forEach((file: File, index: number) => {
                formData.append(`destination_images[${index}]`, file);
            });
        }

        if (user) {
            formData.append("created_by", user.id.toString());
        }

        if (destination) {
            const resdata = await Destination.update(formData, destination.id);
            if (resdata.hasOwnProperty("status") && resdata.status === "success") {
                modalRef.current.close();
                fetchData();
                return resdata.message
            }
        } else {
            const resdata = await Destination.create(formData);
            if (resdata.hasOwnProperty("status") && resdata.status === "success") {
                return resdata.message
            }
        }
    }

    const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
        setTimeout(async () => {
            const message = await destinationData(values);
            if (message) {
                setMessage(message);
                setSubmitting(false);
                resetForm();
            }
        }, 400);
    }
    const initialValues = {
        destination_name: "",
        destination_thumbnail: null,
        destination_images: null,
        description: "",
        published: false,
    };

    const values = destination ? destination : initialValues;

    const { destination_name,
        description,
        published } = values;


    console.log(values)

    return (
        <div>
            <Formik
                initialValues={
                    {
                        destination_name,
                        destination_thumbnail: null,
                        destination_images: null,
                        description,
                        published: !!published
                    }
                }
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                <Form>
                    <div className={clsx(
                        'card',
                        'card-bordered',
                        'mx-5',
                        'sm:mx-auto',
                        'sm:w-4/5',
                        !destination && 'lg:w-3/4',
                        'mt-5',
                        'mb-10'
                    )}>
                        <div className="card-body">
                            <div className="card-title justify-center mb-10">
                                <h2>{destination ? "Edit Destination" : "Add Study Destination"}</h2>
                            </div>
                            <p className='text-base text-success'>{message}</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 mb-2'>
                                <label htmlFor="destination-name" className='font-semibold'>Destination Name</label>
                                <div className='form-control'>
                                    <Field type="text" name="destination_name" id="destination-name" className='input input-bordered focus:outline-none focus:border-primary' />
                                    <ErrorMessage name="destination_name" className='text-xs' />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 mb-2'>
                                <div>
                                    <label htmlFor="destination-thumbnail" className='font-semibold block'>Destination thumbnail</label>
                                    <span className='inline-block text-xs text-slate-500'>Uploaded thumbnail should be in jpg, png, jpeg, avif, webp formats. <br /> width and height should be at least 600x600 px</span>
                                </div>
                                <Field name="destination_thumbnail">
                                    {({ form, meta }: FieldProps) => (
                                        <div className='form-control'>
                                            <input
                                                type="file"
                                                name="destination_thumbnail"
                                                id="destination-thumbnail"
                                                className='file-input'
                                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                    const file = event.currentTarget.files && event.currentTarget.files[0];
                                                    if (file) {
                                                        form.setFieldValue("destination_thumbnail", file);
                                                    }
                                                }}
                                            />
                                            {meta.touched &&
                                                meta.error && <div className="error">{meta.error}</div>}
                                            {destination && <img src={`/images/${destination.destination_thumbnail}`} className='w-28' />}
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 mb-2'>
                                <div>
                                    <label htmlFor="destination-image" className='font-semibold block'>Destination Images</label>
                                    <span className='inline-block text-xs text-slate-500'>Uploaded Image should be in jpg, png, jpeg, avif, webp formats <br />More than one images can upload</span>
                                </div>
                                <Field name="destination_images">
                                    {({ form, meta }: FieldProps) => (
                                        <div className='form-control'>
                                            <input
                                                type="file"
                                                name="destination_images"
                                                id="destination-image"
                                                className='file-input'
                                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                    const files = event.currentTarget.files ? Array.from(event.currentTarget.files) : [];
                                                    form.setFieldValue("destination_images", files);
                                                }}
                                                multiple
                                            />
                                            {meta.touched &&
                                                meta.error && <div className="error">{meta.error}</div>}
                                            <div className="flex flex-wrap">
                                                {destination && destination.destination_images.split(",").map((path: any, index: number) => (
                                                    <img src={`/images/${path}`} className='w-28' key={index} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className='grid grid-cols-1 mb-2'>
                                <p className='font-semibold cursor-default'>Description</p>
                                <Field name="description">
                                    {({ form, meta }: FieldProps) => (
                                        <div className='form-control inline-block'>
                                            <ReactQuill theme="snow" value={form.values.description} onChange={(value) => {
                                                form.setFieldValue("description", value);
                                            }} />
                                            {meta.touched &&
                                                meta.error && <div className="error">{meta.error}</div>}
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className='grid grid-cols-1 mb-2'>
                                <div className='form-control'>
                                    <label className="label cursor-pointer w-40">
                                        <Field type="checkbox" className="checkbox" name="published" />
                                        <span className="label-text">Publish Destination</span>
                                    </label>
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

export default DestinationForm
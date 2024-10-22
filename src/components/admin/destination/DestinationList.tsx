import React, { useEffect, useRef, useState } from 'react'
import { Destination } from '../../../../http/destinaitons';
import DestinationForm from './DestinationForm';

type Props = {}

interface Destination {
    id: number,
    destination_name: String,
    destination_thumbnail: String,
    destination_images: String,
    description: String,
    published: number,
    created_by: number,
    created_at: String,
    updated_at: String
}

function DestinationList({ }: Props): React.JSX.Element {
    const [destinations, setDestination] = useState<Destination[]>([]);
    const [data, setData] = useState<Destination | null>(null);
    const editForm = useRef<HTMLDialogElement>(null);
    const fetchData = async () => {
        const data = await Destination.getAll();
        if (data) {
            setDestination(data);
        }
    };
    useEffect(() => {
        fetchData();
    }, [])

    const openEditForm = (id: number): void => {
        const destinationsArr = [...destinations];

        const destination = destinationsArr.find((des) => des.id === id);
        if (destination) {
            setData(destination);
            editForm.current?.showModal()
        }
    }
    const handlePublishDestination = async (id: number, value: number) => {
        const data = new FormData();
        if (value) {
            data.append("published", "false")
        } else {
            data.append("published", "true");
        }
        const res = await Destination.update(data, id);
        if (res.hasOwnProperty("status") && res.status === "success") {
            fetchData();
        }
    }
    return (
        <div>
            <div className="card card-body">
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Destinaion Name</th>
                                <th>Destination thumbnail</th>
                                <th>published</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                destinations.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {item.destination_name}
                                        </td>
                                        <td>
                                            <div className="mask mask-half-2 h-20 w-28 mx-auto">
                                                <img
                                                    src={`/images/${item.destination_thumbnail}`}
                                                    alt="Destination thumbnail" />
                                            </div>
                                        </td>
                                        <td>{item.published ? "Yes" : "No"}</td>
                                        <td>
                                            {/* <details className="dropdown">
                                                <summary className="btn btn-info btn-xs">Action</summary>
                                                <ul className="menu dropdown-content  rounded-md z-[1] shadow">

                                                </ul>
                                            </details> */}
                                            <div className="dropdown">
                                                <div tabIndex={0} role="button" className="btn btn-xs m-1">Action</div>
                                                <ul tabIndex={0} className="dropdown-content menu bg-stone-200 rounded-box z-[1] p-2 shadow">
                                                    <li className='mb-1'><a className='btn btn-info btn-xs' onClick={() => handlePublishDestination(item.id, item.published)}>{item.published ? "unpublish" : "publish"}</a></li>
                                                    <li className="mb-1"><a className='btn btn-warning btn-xs' onClick={() => openEditForm(item.id)}>Edit</a></li>
                                                    <li className='mb-1'><a className='btn btn-error btn-xs'>Delete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <dialog ref={editForm} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box sm:!w-11/12 sm:!max-w-5xl bg-slate-100">
                    {data?.id}
                    <DestinationForm destination={data} modalRef={editForm} fetchData={fetchData} />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default DestinationList
import React, { useContext, useEffect, useState } from 'react'
import { User } from '../../../../http/users';
import { UserContext } from '../../context/UserProvider';

type User = {
    id: number,
    username: string,
    email: string,
    role: string,
    profile_image: string
}

function UserList(): React.JSX.Element {
    const [users, setUsers] = useState<User[]>([]);
    const userContext = useContext(UserContext);
    const { user } = userContext;

    useEffect(() => {
        (async () => {
            const data = await User.getUsers();
            setUsers(data);
        })();
    }, []);

    const handleDeleteUser = async (id: number, index: number) => {
        if (user?.id !== id) {
            const data = await User.delete(id);
            if (data.hasOwnProperty("status") && data.status === "success") {
                users.splice(index, 1);
            }
        }
        // alert("You can not delete yourself!");
        const modal = document.getElementById('my_modal_5') as HTMLDialogElement
        if (modal) {
            modal.showModal();
        }
    }

    return (
        <div>
            <div className="card card-body">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                {user?.role === "admin" && <th>Actions</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 &&
                                users.map((person, index) => (
                                    <tr key={person.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={`/images/${person.profile_image}`}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{person.username}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {person.email}
                                        </td>
                                        <td>{person.role}</td>
                                        {
                                            user?.role === "admin" &&
                                            <th>
                                                <div className="dropdown">
                                                    <div tabIndex={0} role="button" className="btn btn-info btn-xs">Action</div>
                                                    <ul tabIndex={0} className=" dropdown-content bg-stone-200 rounded-md z-[1] shadow">
                                                        <li className='m-2'><button className='btn btn-error btn-xs' onClick={() => handleDeleteUser(person.id, index)}>Delete</button></li>
                                                    </ul>
                                                </div>
                                            </th>
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Open the modal*/}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-stone-200">
                    <h3 className="font-bold text-lg">Warning!</h3>
                    <p className="py-4">You can not delete yourself</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Okay</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default UserList
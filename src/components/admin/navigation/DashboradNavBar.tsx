import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserProvider"
import { sideNav } from "../../../lib/data"

function DashboradNavBar(): React.JSX.Element {
    const userContext = useContext(UserContext);
    const { user, logout } = userContext;
    return (
        <div className="sticky top-0 z-10">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-slate-200 w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <FontAwesomeIcon icon={faBars} className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                            </label>
                        </div>
                        <div className="mx-2 flex-1 px-2 justify-center lg:justify-start">
                            <Link to="/">
                                <img src="/images/logo.png" className="max-w-40 sm:max-w-60 md:max-w-64" alt="" />
                            </Link>
                        </div>
                        <div className="mx-5">
                            <Menu as="div" className="relative sm:ml-3">
                                <div>
                                    <MenuButton className="relative flex items-center rounded-full text-sm">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <span className="mx-1 hidden sm:inline-block">{user?.username}</span>
                                        <img
                                            alt=""
                                            src={`/images/${user?.profile_image}`}
                                            className="h-8 w-8 rounded-full"
                                        />
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    data-open="open"
                                >
                                    <MenuItem>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                            Your Profile
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                            Settings
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a onClick={logout} href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                            Sign out
                                        </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-slate-200 min-h-full w-64 p-4">
                        {
                            user?.role != "student" ? sideNav.map((nav) => {
                                if (nav.hasOwnProperty("main") && nav.hasOwnProperty("sub")) {
                                    return <li key={nav.id}>
                                        <details>
                                            <summary>{nav.main}</summary>
                                            <ul>
                                                {
                                                    nav.sub?.map((child) => (
                                                        <li key={child.id}><Link to={`/dashboard/${child.href}`}>{child.name}</Link></li>
                                                    ))
                                                }
                                            </ul>
                                        </details>
                                    </li>
                                } else {
                                    return <li key={nav.id}><Link to={`/dashboard/${nav.href}`}>{nav.name}</Link></li>
                                }
                            }) : <li><Link to="#">Your profile</Link></li>

                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboradNavBar
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import React from "react"
import { Link } from "react-router-dom"

function DashboradNavBar(): React.JSX.Element {
    return (
        <div className="sticky top-0 z-10">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-base-200 w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <FontAwesomeIcon icon={faBars} className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                            </label>
                        </div>
                        <div className="mx-2 flex-1 px-2 justify-center lg:justify-start">
                            <Link to="/">
                                <img src="/images/logo.png" className="max-w-52 sm:max-w-60 md:max-w-64" alt="" />
                            </Link>
                        </div>
                        <div className="mx-5">
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <MenuButton className="relative flex items-center rounded-full text-sm">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <span className="mx-1">User name</span>
                                        <img
                                            alt=""
                                            src="/images/CEO-Picture-1.jpg"
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
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
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
                    <ul className="menu bg-base-200 min-h-full w-64 p-4">
                        {/* Sidebar content here */}
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul>
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboradNavBar
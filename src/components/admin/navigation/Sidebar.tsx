import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

function Sidebar({ }: Props): React.JSX.Element {
    const sideNav = [
        {
            id: 1,
            main: "User",
            sub: [
                { name: "List", href: "user/list" },
                { name: "Add", href: "user/add" }
            ]
        },
        {
            id: 2,
            main: "Destination",
            sub: [
                { name: "List", href: "destination/list" },
                { name: "Add", href: "destination/add" }
            ]
        },
        {
            id: 3,
            main: "Team member",
            sub: [
                { name: "List", href: "member/list" },
                { name: "Add", href: "member/add" }
            ]
        },
        {
            id: 3,
            main: "Service",
            sub: [
                { name: "List", href: "service/list" },
                { name: "Add", href: "service/add" }
            ]
        },
        {
            id: 4,
            main: "Messeges From People",
            sub: [
                { name: "List", href: "message/list" },
                { name: "Add", href: "message/add" }
            ]
        },
        {
            id: 5,
            main: "Events",
            sub: [
                { name: "List", href: "event/list" },
                { name: "Add", href: "event/add" }
            ]
        },
        {
            id: 6,
            main: "Partners",
            sub: [
                { name: "List", href: "partner/list" },
                { name: "Add", href: "partner/add" }
            ]
        },
        {
            id: 7,
            name: "Carousel",
            href: "carousel"
        },
        {
            id: 8,
            name: "Gallery",
            href: "gallery"
        },
    ];
    return (
        <div className='hidden lg:block'>
            <div className='h-screen fixed left-0 bg-base-200'>
                <ul className="menu flex-nowrap h-5/6 overflow-y-auto w-56 [&_li>*]:rounded-md [&_li>*]:mb-1">
                    {
                        sideNav.map((nav) => {
                            if (nav.hasOwnProperty("main") && nav.hasOwnProperty("sub")) {
                                return <li key={nav.id}>
                                    <details>
                                        <summary>{nav.main}</summary>
                                        <ul>
                                            {
                                                nav.sub?.map((child, index) => (
                                                    <li key={index}><Link to={`/dashboard/${child.href}`}>{child.name}</Link></li>
                                                ))
                                            }
                                        </ul>
                                    </details>
                                </li>
                            } else {
                                return <li><Link to={`/dashboard/${nav.href}`}>{nav.name}</Link></li>
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
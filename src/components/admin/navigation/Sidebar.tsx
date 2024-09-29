import React from 'react'
import { Link } from 'react-router-dom'
import { sideNav } from '../../../lib/data'

function Sidebar(): React.JSX.Element {
    return (
        <div className='hidden lg:block'>
            <div className='h-screen fixed left-0 bg-slate-200'>
                <ul className="menu flex-nowrap h-5/6 overflow-y-auto w-56 [&_li>*]:rounded-md [&_li>*]:mb-1">
                    {
                        sideNav.map((nav) => {
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
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
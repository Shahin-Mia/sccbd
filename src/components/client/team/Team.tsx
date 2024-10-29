import React from "react"
import { members } from "../../../lib/data"

function Team(): React.JSX.Element {
    const employee = [...members];
    return (
        <div className="container mx-auto">
            <div className="mt-20 mb-10">
                <h1 className="text-4xl lg:text-5xl font-bold text-center">Team Members</h1>
                <div className="divider"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-10 sm:gap-8 md:gap-5 lg:gap-0">
                {
                    employee.map((member) => (
                        <div className="card card-side hover:shadow-xl group hidden xl:flex my-14">
                            <figure className="transition duration-500 scale-125 translate-x-3/4 group-hover:scale-100 group-hover:translate-x-0 rounded-none group-hover:rounded-s-2xl relative bg-white w-40 h-60">
                                <img
                                    src={`/images/${member.image}`}
                                    alt="Movie"
                                    className="w-full h-60"
                                />
                                <figcaption className="absolute text-white text-center h-1/5 bottom-0 opacity-100 transition duration-500 group-hover:opacity-0 bg-primary bg-opacity-25">{member.name}</figcaption>
                            </figure>
                            <div className="card-body w-72">
                                <h2 className="card-title -translate-x-2/4 transition duration-500 group-hover:translate-x-0 opacity-0 group-hover:opacity-100">{member.name}</h2>
                                <p className="-translate-x-2/4 transition duration-500 group-hover:translate-x-0 opacity-0 group-hover:opacity-100">{member.position}</p>
                                <p className="-translate-x-2/4 transition duration-500 group-hover:translate-x-0 opacity-0 group-hover:opacity-100">Email: {member.email}</p>
                            </div>
                        </div>
                    ))
                }

                {
                    employee.map((member) => (
                        <div className="card lg:card-side bg-base-100 shadow-xl xl:hidden mb-3">
                            <figure className="bg-white">
                                <img
                                    src={`/images/${member.image}`}
                                    alt="Movie"
                                    className="w-72"
                                />
                            </figure>
                            <div className="card-body bg-white w-72">
                                <h2 className="card-title justify-center">{member.name}</h2>
                                <p className="text-center">{member.position}</p>
                                <p className="text-center">Email: {member.email}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Team
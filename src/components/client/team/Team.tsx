import React from "react"

function Team(): React.JSX.Element {
    return (
        <div className="container mx-auto">
            <div className="mt-20 mb-10">
                <h1 className="text-4xl lg:text-5xl font-bold text-center">Team Members</h1>
                <div className="divider"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center mb-10 gap-10 sm:gap-8 md:gap-5 lg:gap-3 xl:gap-0">
                <div className="card card-side bg-base-100 hover:shadow-xl group hidden xl:flex">
                    <figure className="transition duration-500 scale-125 translate-x-3/4 group-hover:scale-100 group-hover:translate-x-0 rounded-none group-hover:rounded-s-2xl relative">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            alt="Movie" />
                        <figcaption className="absolute text-white text-center h-1/5 bottom-0 opacity-100 transition duration-500 group-hover:opacity-0 bg-primary bg-opacity-25">Spider Man</figcaption>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title -translate-x-2/4 transition duration-500 group-hover:translate-x-0 opacity-0 group-hover:opacity-100">New movie is released!</h2>
                        <p className="-translate-x-2/4 transition duration-500 group-hover:translate-x-0 opacity-0 group-hover:opacity-100">Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary  -translate-x-2/4 transition duration-500 group-hover:translate-x-0 opacity-0 group-hover:opacity-100">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl xl:hidden">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl xl:hidden">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
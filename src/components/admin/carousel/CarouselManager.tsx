type Props = {}

function CarouselManager({ }: Props): React.JSX.Element {
    return (
        <div>
            <div className="card card-bordered m-4">
                <div className="px-5 pt-5 flex justify-between">
                    <button className="btn btn-neutral btn-sm">Upload</button>
                    <div>
                        <button className="btn btn-info btn-sm">Active</button>
                        <button className="btn btn-error btn-sm ml-4">Delete</button>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="card-body p-4 w-48 sm:w-60 md:w-72 lg:w-96 relative group">
                    <label htmlFor="slider-1.webp">
                        <img src="/images/slider-1.webp" alt="" />
                        <input
                            type="checkbox"
                            className="absolute top-7 left-7"
                            id="slider-1.webp"
                            name="checked"
                            value="1"
                            defaultChecked
                        />
                        <button className="btn btn-sm bg-primary opacity-80 absolute top-7 right-7 hidden group-hover:block">Edit</button>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default CarouselManager
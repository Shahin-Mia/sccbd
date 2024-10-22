
import ApplicationForm from "../../ui/ApplicationForm"

// type Props = {}

const ApplyPage = () => {
    return (
        <div className="bg-slate-100 py-10">
            <div className="bg-white w-4/5 md:container mx-auto py-16 rounded-3xl">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary">Apply Now</h2>
                </div>
                <div className="w-4/5 md:3/4 mx-auto">
                    <ApplicationForm />
                </div>
            </div>
        </div>
    )
}

export default ApplyPage
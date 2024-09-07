import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import ContactForm from "../../ui/ContactForm"
import useDocumentTitle from "../../../lib/Helpers";

// type Props = {}

const Contact = () => {
    useDocumentTitle('Contact');
    return (
        <div>
            <div className="bg-primary text-center">
                <h1 className="text-4xl/10 font-semibold text-white p-16">For Any Query <br /> Feel free to contact us</h1>
            </div>
            <div className="container mx-auto py-16 px-10">
                <TabGroup>
                    <TabList className="border-b relative">
                        <Tab className="bg-white text-stone-500 text-xl px-3 py-1 rounded-t border border-b-0 absolute -bottom-px left-16">Contact</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <div className="mt-10">
                                <h3 className="text-3xl font-semibold text-center">Contact with us</h3>
                                <p className="text-lg mt-5">
                                    Our expert team is available for counseling. You can contact us to get the free counseling. Fill out the form so our team will reach you out and schedule a meeting for you.
                                </p>
                            </div>
                            <div className="w-4/5 md:w-3/4 mx-auto py-10">
                                <ContactForm classes="" />
                            </div>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    )
}

export default Contact


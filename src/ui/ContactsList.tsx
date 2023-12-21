import { useGetElementsListQuery } from "../App/redux/MockAPI"
import ContactCard from "./ContactCard"
import Loader from "./Loader";

const ContactsList = () => {
    const { data: contactList, isLoading } = useGetElementsListQuery();

    if (isLoading) return <Loader />

    return (
        <div className='flex flex-col py-3 gap-3'>
            No image loads, because the images URLs are unreachable
            <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 justify-center gap-2 py-3">
                {
                    contactList!.length === 0 ? <h1>There are no contacts yet...</h1>
                        :
                        contactList!.map((contact) => (
                            <ContactCard contactName={contact.name} contactImage={contact.avatar} key={contact.id} />
                        ))
                }
            </div>
        </div>
    )
}

export default ContactsList
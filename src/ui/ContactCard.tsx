interface IContactCardProps {
    contactName: string,
    contactImage: string
}

const ContactCard = ({ contactImage, contactName }: IContactCardProps) => {
    return (
        <div className="bg-white border-gray-200 border-2 py-8 px-10 text-center rounded-md shadow-lg w-full mx-auto">
            <div className="flex flex-row gap-3 justify-left mx-auto">
                <img className="w-20 h-20 object-cover rounded-full shadow-lg" src={contactImage} alt="Contact Avatar" />
                <div className="grid content-center">
                    <h2 className={"font-semibold text-left align-middle max-h-min text-2xl md:text-lg lg:text-2xl break-words"}>{contactName}</h2>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
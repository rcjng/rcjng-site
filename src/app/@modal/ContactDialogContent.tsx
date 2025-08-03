import React from "react";
import { ContactCard } from "./ContactCard";
import { fetchRcjngContactCard } from "@/_apis/fetchRcjngContactCard";

export const ContactDialogContent = React.memo(function ContactDialogContent() {
    const contactCard = fetchRcjngContactCard();
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-xl font-bold ">
                📩 <span className="bg-gradient-to-b from-red-500 to-white bg-clip-text text-transparent">Contact</span>
            </h2>
            
            <ContactCard 
                contactCard={contactCard}
            />
        </div>
    );
});
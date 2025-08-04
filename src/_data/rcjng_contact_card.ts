import { IContactCard } from "@/_types/IContactCard";

export const RCJNG_CONTACT_CARD: Readonly<IContactCard> = {
    name: "Robert Jiang",
    email: "robertcjiang@gmail.com",
    organization: "Palantir",
    website: "rcjng.com",
    phone: "+1 503-810-9393",
    address: "San Mateo, CA",
    photoUri: "/contact_card_photo_2000x2000.png",
    photoAltText: "Contact card photo of Robert",
    vCardUri: "/rcjng.vcf"   
} as const;

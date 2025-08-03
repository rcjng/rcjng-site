import { RCJNG_CONTACT_CARD } from "@/_data/rcjng_contact_card";
import { IContactCard } from "@/_types/IContactCard";

export function fetchRcjngContactCard(): Readonly<IContactCard> {
    return RCJNG_CONTACT_CARD;
}
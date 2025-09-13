export interface IContactCard {
    name: string;
    email?: string;
    organization: string;
    website?: string;
    phone?: string;
    address?: string;
    photoUri: string;
    photoAltText: string;
    vCardUri: string;
}
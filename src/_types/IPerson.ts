import { ISocial } from "./ISocial";

export interface IPerson {
    readonly id: string;
    readonly username: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly nickName: string;
    readonly email: string;
    readonly phone: string;
    readonly socials: readonly Readonly<ISocial>[];
}
export const SocialType = {
    EMAIL: "EMAIL",
    PHONE: "PHONE",
    SITE: "SITE",
} as const;
export type SocialType = Readonly<typeof SocialType[keyof typeof SocialType]>;

export interface ISocial {
    readonly type: SocialType;
    readonly label: string;
    readonly value: string;
    readonly iconUri: string;
}
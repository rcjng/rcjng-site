import { ExperienceType } from "./ExperienceType";

export interface IExperience {
    readonly id: string;
    readonly type: ExperienceType;
    readonly title: string;
    readonly organizationName: string;
    readonly organizationEmoji: string;
    readonly organizationSiteUrl?: string;
    readonly location?: string;
    readonly startDateIso: string;
    readonly endDateIso?: string;
    readonly summary?: string;
    readonly descriptions?: readonly string[];
    readonly technologies?: readonly string[];
}
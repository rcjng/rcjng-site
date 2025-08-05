import { ExperienceType } from "./ExperienceType";

export interface IExperience {
    readonly id: string;
    readonly type: ExperienceType;
    readonly title: string;
    readonly organizationTitle: string;
    readonly organizationSubTitle?: string;
    readonly organizationEmoji: string;
    readonly organizationSiteUrl?: string;
    readonly location?: string;
    readonly startDateIso: string;
    readonly endDateIso?: string;
    readonly summary?: string;
    readonly descriptions?: readonly string[];
    readonly skillsAndAwards?: readonly string[];
}
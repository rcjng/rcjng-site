import { IPerson } from "./IPerson";
import { IExperience } from "./IExperience";
import { IPortfolioSummary } from "./IPortfolioSummary";
import { ISkill } from "./ISkill";

export interface IPortfolio {
    readonly experiences: readonly Readonly<IExperience>[];
    readonly person: Readonly<IPerson>;
    readonly skills: readonly Readonly<ISkill>[];
    readonly summary: Readonly<IPortfolioSummary>;
    readonly timestamp: string;
}